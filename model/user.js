import { Schema, models, model } from "mongoose"

const userSchema = new Schema({
    name: String,
    avatar: String,
    email: String,
    salary: Number,
    date: String,
    status: String
})

const Users = model.user || model("user", userSchema)
export default Users