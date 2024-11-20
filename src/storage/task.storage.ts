import { TaskInterface } from "../models/task.interface";
import { Task, TaskInterfaceSchema } from "../schemas/task.schema";

export const createTaskStorage = async (task: TaskInterface) => {
    const newTask = new Task(task)
    try {
        await newTask.save();
        return newTask
    } catch(err){
        return new Error('Error al crear la tarea')
    }
}

export const getAllTasksStorage = async () => {
    try {
        const tasks: TaskInterfaceSchema[] = await Task.find()
        return tasks
    } catch (err){
        return  new Error('Error al obtener las tareas')
    }
}

export const updateTaskStorage = async (id: string, task: Partial<TaskInterface>) => {
    try{
        const updateTask = await Task.findByIdAndUpdate(id, task)
        return updateTask
    }catch (err){
        return  new Error('Error al actualizar la tarea')
    }

}

export const deleteTaskStorage = async (id:string) => {
    try{
        const task = Task.findByIdAndDelete(id)
        return task
    }catch {
        return new Error("Error al eliminar la pelicula")
    }
}