import { Schema , models, model } from "mongoose";


const userSchema = new Schema({
    partname : String,
    partnumber : String,
    Quantity : Number,
    Price: Number,



})

const Users = models.user || model('user', userSchema)

export default Users;
