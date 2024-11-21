import { Schema, model } from "mongoose";
import { UserInterface } from "../models/user.interface";

const userSchema = new Schema<UserInterface>({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, remove: true}
})

const User = model("User", userSchema)
export default User