const Task = require("../models/todoModel");

exports.getAllTodos = async (req, res) => {
  const todos = await Task.getAll();
  res.json(todos);
};

exports.getTodo = async (req, res) => {
  const todo = await Task.getById(req.params.id);
  if (!todo) return res.status(404).json({ message: "Not found" });
  res.json(todo);
};

exports.createTodo = async (req, res) => {
  const { title, completed } = req.body;
  if (!title) return res.status(400).json({ message: "Title is required" });
  const [newTodo] = await Task.create({ title, completed });
  res.status(201).json(newTodo);
};

exports.updateTodo = async (req, res) => {
  const { title, completed } = req.body;
  const updated = await Task.update(req.params.id, { title, completed });
  if (!updated.length) return res.status(404).json({ message: "Not found" });
  res.json(updated[0]);
};

exports.deleteTodo = async (req, res) => {
  const deleted = await Task.remove(req.params.id);
  if (!deleted) return res.status(404).json({ message: "Not found" });
  res.status(204).send();
};
