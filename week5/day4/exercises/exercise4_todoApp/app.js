import { TodoList } from "./todo.js";

const todo = new TodoList();
todo.addTask("Add readme file");
todo.addTask("Finish project");
todo.completeTask(0);
todo.listTasks();
