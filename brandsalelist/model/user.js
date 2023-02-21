import { Schema , models, model } from "mongoose";


const userSchema = new Schema({
   brand: String,
   transactionType : String,
   totalOrders : Number,
   totalOrderValue:Number,
   grossMarginPercentage: Number,
   createdAt : String,
   updatedAt :String  



})

const Users = models.user || model('user', userSchema)

export default Users;
