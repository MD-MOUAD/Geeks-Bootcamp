import * as taskService from "../services/taskService.js";

export async function getTasks(req, res) {
  try {
    const tasks = await taskService.getAllTasks();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve tasks" });
  }
}

export async function getTask(req, res) {
  try {
    const task = await taskService.getTaskById(req.params.id);

    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }

    res.json(task);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve task" });
  }
}

export async function createTask(req, res) {
  try {
    const newTask = await taskService.createTask(req.body);
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ error: "Failed to create task" });
  }
}

export async function updateTask(req, res) {
  try {
    const updatedTask = await taskService.updateTask(req.params.id, req.body);

    if (!updatedTask) {
      return res.status(404).json({ error: "Task not found" });
    }

    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ error: "Failed to update task" });
  }
}

export async function deleteTask(req, res) {
  try {
    const deletedTask = await taskService.deleteTask(req.params.id);

    if (!deletedTask) {
      return res.status(404).json({ error: "Task not found" });
    }

    res.json(deletedTask);
  } catch (error) {
    res.status(500).json({ error: "Failed to delete task" });
  }
}
