import { readTasks, writeTasks } from "../utils/fileStorage.js";

export async function getAllTasks() {
  return await readTasks();
}

export async function getTaskById(id) {
  const tasks = await readTasks();
  return tasks.find((task) => task.id === parseInt(id));
}

export async function createTask(taskData) {
  const tasks = await readTasks();
  const newTask = {
    id: tasks.length > 0 ? Math.max(...tasks.map((t) => t.id)) + 1 : 1,
    title: taskData.title,
    description: taskData.description,
    completed: taskData.completed || false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  tasks.push(newTask);
  await writeTasks(tasks);
  return newTask;
}

export async function updateTask(id, taskData) {
  const tasks = await readTasks();
  const index = tasks.findIndex((t) => t.id === parseInt(id));

  if (index === -1) return null;

  const updatedTask = {
    ...tasks[index],
    title: taskData.title,
    description: taskData.description,
    completed:
      taskData.completed !== undefined
        ? taskData.completed
        : tasks[index].completed,
    updatedAt: new Date().toISOString(),
  };

  tasks[index] = updatedTask;
  await writeTasks(tasks);
  return updatedTask;
}

export async function deleteTask(id) {
  const tasks = await readTasks();
  const index = tasks.findIndex((t) => t.id === parseInt(id));

  if (index === -1) return null;

  const deletedTask = tasks.splice(index, 1)[0];
  await writeTasks(tasks);
  return deletedTask;
}
