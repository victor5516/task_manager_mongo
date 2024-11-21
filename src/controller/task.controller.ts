import { NextFunction, Request, Response } from "express";
import { TaskInterface } from "../models/task.interface";
import {
  createTaskService,
  deleteTaskService,
  getAllTasksService,
  updateTaskService,
} from "../services/task.service";
import { ResponseHandler } from "../handlers/response.handler";
import { ErrorHandler } from "../handlers/error.handler";

export const getTasks = async (
  _req: Request,
  _res: Response,
  next: NextFunction
) => {
  const tasks = await getAllTasksService();

  if (!tasks) {
    next(new ErrorHandler(404, "Tarea no encontrada"));
  }
  if (tasks instanceof Error) {
    next(new ErrorHandler(500, tasks.message));
  }
  const result = {
    tasks,
  };
  next(new ResponseHandler(200, result, "Tareas encontradas"));
};

export const createTask = async (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  const task: TaskInterface = req.body;
  const newTask = await createTaskService(task);

  if (newTask instanceof Error) {
    next(new ErrorHandler(500, newTask.message));
  }
  const result = {
    task,
  };
  next(new ResponseHandler(201, result, "Tareas creada"));
};

export const updateTask = async (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  const id: string = req.params.id;
  const task: Partial<TaskInterface> = req.body;

  const updatedTask = await updateTaskService(id, task);
  if (!updatedTask) {
    next(new ErrorHandler(404, "Tarea no encontrada"));
  }
  if (updatedTask instanceof Error) {
    next(new ErrorHandler(500, updatedTask.message));
  }
  const result = {
    updatedTask,
  };
  next(new ResponseHandler(200, result, "Tareas actualizada"));
};

export const deleteTask = async (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  const id: string = req.params.id;

  const task = await deleteTaskService(id);
  if (!task) {
    next(new ErrorHandler(404, "Tarea no encontrada"));
  }
  if (task instanceof Error) {
    next(new ErrorHandler(500, task.message));
  }
  const result = {
    task,
  };
  next(new ResponseHandler(200, result, "Tareas Eliminada"));
};
