import { Schema, model, connect } from "mongoose";
import { User } from "./user.interface";

const userSchema = new Schema<User>({
    username: {type: String, required: true},
    email: { type: String, required: true},
    password: { type: String, required: true},
})

export default model<User>('User', userSchema);;