import express from "express";
import bodyParser from "body-parser";
import taskRoutes from "./routes/taskRoutes.js";
import { readTasks } from "./utils/fileStorage.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/tasks", taskRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

// Initialize and start the server
async function startServer() {
  try {
    // Initialize tasks.json if it doesn't exist
    await readTasks();
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to initialize tasks file:", error);
    process.exit(1);
  }
}

startServer();
