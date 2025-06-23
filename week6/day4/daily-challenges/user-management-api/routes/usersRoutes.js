import express from "express";
import path from "path";
import bcrypt from "bcrypt";
import { readFile, writeFile } from "fs/promises";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const router = express.Router();
const USERS_FILE = path.resolve("users.json");

// Middleware
router.use(express.json());

// Helper functions
const readUsers = async () => {
  const data = await readFile(USERS_FILE, "utf-8");
  return JSON.parse(data);
};

const writeUsers = async (users) => {
  await writeFile(USERS_FILE, JSON.stringify(users, null, 2));
};

// Routes
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

router.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/register.html"));
});

router.post("/register", async (req, res) => {
  try {
    const { fullName, userName, email, password } = req.body;
    const users = await readUsers();

    // Check if user already exists
    if (users.some((user) => user.userName === userName)) {
      return res.status(400).json({ error: "Username already exists" });
    }

    const passHash = await bcrypt.hash(password, 10);
    const newUser = {
      id: users.length + 1,
      fullName,
      userName,
      email,
      password: passHash,
    };

    users.push(newUser);
    await writeUsers(users);

    res.status(201).json({
      message: "User registered successfully",
      user: { id: newUser.id, userName: newUser.userName },
    });
  } catch (err) {
    console.error("Registration error:", err);
    res.status(500).json({ error: "Failed to register user" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { userName, password } = req.body;
    const users = await readUsers();
    const user = users.find((user) => user.userName === userName);

    if (!user) {
      return res.status(401).json({ error: "Invalid username or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid username or password" });
    }

    res.json({
      message: "Login successful!",
      user: { id: user.id, userName: user.userName },
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ error: "Failed to process login" });
  }
});

router.get("/users", async (req, res) => {
  try {
    const users = await readUsers();
    // Don't send password hashes in response
    const sanitizedUsers = users.map(({ password, ...user }) => user);
    res.json(sanitizedUsers);
  } catch (err) {
    console.error("Get users error:", err);
    res.status(500).json({ error: "Failed to retrieve users" });
  }
});

router.get("/users/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const users = await readUsers();
    const user = users.find((user) => user.id === id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Don't send password hash in response
    const { password, ...userData } = user;
    res.json(userData);
  } catch (err) {
    console.error("Get user error:", err);
    res.status(500).json({ error: "Failed to retrieve user" });
  }
});

router.put("/users/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const { fullName, userName, email, password } = req.body;
    const users = await readUsers();
    const index = users.findIndex((user) => user.id === id);

    if (index === -1) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update user data
    const updatedUser = {
      ...users[index],
      fullName: fullName || users[index].fullName,
      userName: userName || users[index].userName,
      email: email || users[index].email,
    };

    if (password) {
      updatedUser.password = await bcrypt.hash(password, 10);
    }

    users[index] = updatedUser;
    await writeUsers(users);

    res.json({
      message: "User updated successfully",
      user: { id: updatedUser.id, userName: updatedUser.userName },
    });
  } catch (err) {
    console.error("Update user error:", err);
    res.status(500).json({ error: "Failed to update user" });
  }
});

export default router;
