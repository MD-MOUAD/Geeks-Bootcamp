const express = require("express");
const bodyParser = require("body-parser");
const { authenticateToken, checkRole } = require("./authMiddleware");
const { register, login, getProfile } = require("./userController");
require("./database");

const app = express();
app.use(bodyParser.json());

// Routes
app.post("/api/register", register);
app.post("/api/login", login);
app.get("/api/profile", authenticateToken, getProfile);

// Admin route
app.get("/api/admin", authenticateToken, checkRole("admin"), (req, res) => {
  res.json({ message: "Admin access granted" });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
