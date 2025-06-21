import express from "express";
import { v4 as uuidv4 } from "uuid";

const app = express();
app.use(express.json());

let todos = [];

app.get("/api/todos", (req, res) => {
  res.json(todos);
});

app.get("/api/todos/:id", (req, res) => {
  const todo = todos.find((t) => t.id === req.params.id);
  if (!todo) return res.status(404).json({ message: "Todo not found" });
  res.json(todo);
});

app.post("/api/todos", (req, res) => {
  if (!req.body.title)
    return res.status(400).json({ message: "Title is required" });

  const todo = {
    id: uuidv4(),
    title: req.body.title,
    completed: req.body.completed || false,
  };
  todos.push(todo);
  res.status(201).json(todo);
});

app.put("/api/todos/:id", (req, res) => {
  const todoIndex = todos.findIndex((t) => t.id === req.params.id);
  if (todoIndex === -1)
    return res.status(404).json({ message: "Todo not found" });

  todos[todoIndex] = {
    ...todos[todoIndex],
    title: req.body.title || todos[todoIndex].title,
    completed:
      req.body.completed !== undefined
        ? req.body.completed
        : todos[todoIndex].completed,
  };
  res.json(todos[todoIndex]);
});

app.delete("/api/todos/:id", (req, res) => {
  todos = todos.filter((t) => t.id !== req.params.id);
  res.status(204).send();
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Todo API running on port ${PORT}`);
});
