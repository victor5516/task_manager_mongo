import { TaskInterface } from "../models/task.interface";
import { model, Schema, Document } from "mongoose";

export interface TaskInterfaceSchema extends Document {
    name: string,
    description:string
    dueDate: Date
    status: string
}

const taskSchema = new Schema<TaskInterfaceSchema>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    dueDate: { type: Date, required: true },
    status: { type: String, required: true }
})

export const Task = model<TaskInterface>('Task', taskSchema);