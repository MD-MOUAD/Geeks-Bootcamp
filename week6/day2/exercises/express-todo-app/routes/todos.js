const express = require("express");
const router = express.Router();

let todos = [];

// Get all todos
router.get("/", (req, res) => {
  res.json(todos);
});

// Add a new todo
router.post("/", (req, res) => {
  const { task } = req.body;
  if (!task) {
    return res.status(400).json({ error: "Task is required" });
  }
  const newTodo = { id: Date.now(), task };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// Update a todo by ID
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { task } = req.body;
  const todoIndex = todos.findIndex((todo) => todo.id == id);

  if (todoIndex === -1) {
    return res.status(404).json({ error: "Todo not found" });
  }

  todos[todoIndex].task = task;
  res.json(todos[todoIndex]);
});

// Delete a todo by ID
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const initialLength = todos.length;
  todos = todos.filter((todo) => todo.id != id);

  if (todos.length === initialLength) {
    return res.status(404).json({ error: "Todo not found" });
  }

  res.status(204).send();
});

module.exports = router;
