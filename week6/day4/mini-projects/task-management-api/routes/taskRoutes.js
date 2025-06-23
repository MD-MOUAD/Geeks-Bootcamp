import express from "express";
import { validateTask } from "../middlewares/validateTask.js";
import * as taskController from "../controllers/taskController.js";

const router = express.Router();

router.get("/", taskController.getTasks);
router.get("/:id", taskController.getTask);
router.post("/", validateTask, taskController.createTask);
router.put("/:id", validateTask, taskController.updateTask);
router.delete("/:id", taskController.deleteTask);

export default router;
