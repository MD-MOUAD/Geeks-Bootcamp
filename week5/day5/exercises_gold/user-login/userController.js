const jwt = require("jsonwebtoken");
const db = require("./database");
const { validPassword, hashPassword, comparePasswords } = require("./password");
const { MAX_LOGIN_ATTEMPTS, LOCK_TIME, JWT_SECRET } = require("./constants");

const register = async (req, res) => {
  const { username, password, role = "user" } = req.body;

  // Password complexity check
  if (!validPassword(password)) {
    return res.status(400).json({
      message:
        "Password must contain at least 8 characters, one uppercase, one lowercase, and one number",
    });
  }

  try {
    const hashedPassword = await hashPassword(password);
    db.run(
      "INSERT INTO users (username, password, role) VALUES (?, ?, ?)",
      [username, hashedPassword, role],

      (err) => {
        if (err) {
          return res.status(400).json({ message: "Username already exists" });
        }
        res.status(201).json({ id: this.lastID });
      }
    );
  } catch (err) {
    res.status(500).json({ message: "Error registering user" });
  }
};

const login = (req, res) => {
  const { username, password } = req.body;

  db.get(
    "SELECT * FROM users WHERE username = ?",
    [username],
    async (err, user) => {
      if (err || !user) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      // Check if account is locked
      if (user.locked) {
        const lockTimePassed = Date.now() - user.locked > LOCK_TIME;
        if (!lockTimePassed) {
          return res
            .status(403)
            .json({ message: "Account locked. Try again later." });
        } else {
          // Unlock the account
          db.run(
            "UPDATE users SET locked = 0, login_attempts = 0 WHERE id = ?",
            [user.id]
          );
        }
      }

      try {
        const passwordsMatch = await comparePasswords(password, user.password);
        if (passwordsMatch) {
          // Reset login attempts on successful login
          db.run("UPDATE users SET login_attempts = 0 WHERE id = ?", [user.id]);

          const token = jwt.sign(
            { id: user.id, username: user.username, role: user.role },
            JWT_SECRET,
            { expiresIn: "1h" }
          );
          res.json({ token });
        } else {
          // Increment failed login attempts
          const newAttempts = user.login_attempts + 1;
          if (newAttempts >= MAX_LOGIN_ATTEMPTS) {
            db.run(
              "UPDATE users SET login_attempts = ?, locked = ? WHERE id = ?",
              [newAttempts, Date.now(), user.id]
            );
            return res.status(403).json({
              message: "Account locked due to too many failed attempts",
            });
          } else {
            db.run("UPDATE users SET login_attempts = ? WHERE id = ?", [
              newAttempts,
              user.id,
            ]);
            res.status(401).json({ message: "Invalid credentials" });
          }
        }
      } catch (err) {
        res.status(500).json({ message: "Error during login" });
      }
    }
  );
};

const getProfile = (req, res) => {
  db.get(
    "SELECT id, username, role FROM users WHERE id = ?",
    [req.user.id],
    (err, user) => {
      if (err || !user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.json(user);
    }
  );
};

module.exports = { register, login, getProfile };
