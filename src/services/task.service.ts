
import { TaskInterface } from "../models/task.interface";
import { createTaskStorage, updateTaskStorage, getAllTasksStorage, deleteTaskStorage } from "../storage/task.storage";

export const createTaskService = async (task: TaskInterface) => {
    const taskParsed = {
        ...task,
        dueDate: new Date(task.dueDate)
    }
    const newTask = await createTaskStorage(taskParsed)
    return newTask;
}

export const getAllTasksService = async () => {
    const tasks = await getAllTasksStorage()
    if(tasks instanceof Error){
     return  null
    }
    return tasks


}

export const updateTaskService = async (id: string, task: Partial<TaskInterface>) => {
    const updatedTask = await updateTaskStorage(id, task)
    if(updatedTask instanceof Error) {
        return null
    }
    return updatedTask
}


export const deleteTaskService = async (id: string) =>{
    const deletedTask = await deleteTaskStorage(id)
    if(deletedTask instanceof Error){
        return null
    }
    return deletedTask
}