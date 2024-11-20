import { Request, response, Response } from "express";
import { TaskInterface } from "../models/task.interface";
import { createTaskService, deleteTaskService, getAllTasksService, updateTaskService } from "../services/task.service";

export const getTasks = async(
    req: Request,
    res: Response
) => {
    const tasks = await getAllTasksService()

    if(tasks.length === 0){
        res.status(404).json({
            status: "NOT FOUND",
            message: "Tareas no Encontradas"
        })
    }
    res.status(200).json({
        response: tasks
    })

}

export const createTask = async (req: Request, res: Response) => {
    const task: TaskInterface = req.body
    const newTask = await createTaskService(task)
    if(newTask instanceof Error){
        res.status(500).json({
            status: "ERROR",
            message: newTask.message
        })
    }
    res.status(201).json({
        response: newTask
    })
}

export const updateTask = async (req: Request, res: Response) => {
  const id: string = req.params.id;
  const task: Partial<TaskInterface> = req.body;

  const updatedTask = await updateTaskService(id, task);
  if (!updatedTask) {
    res.status(404).json({
      status: "ERROR",
      message: "TAREA NO ENCONTRADA",
    });
  }
  if(updatedTask instanceof Error){
    res.status(500).json({
        status: "ERROR",
        message: updatedTask.message
    })
  }
  res.status(200).json({
    response: updatedTask
})
};

export const deleteTask = async (req: Request, res: Response) => {
    const id: string = req.params.id;


    const task = await deleteTaskService(id);
    if (!task) {
      res.status(404).json({
        status: "ERROR",
        message: "TAREA NO ENCONTRADA",
      });
    }
    if(task instanceof Error){
      res.status(500).json({
          status: "ERROR",
          message: task.message
      })
    }
    res.status(200).json({
      response: task
  })
  };

