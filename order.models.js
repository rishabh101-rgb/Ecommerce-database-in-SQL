const mongoose = require("mongoose")

const orderItemSchema = new mongoose.Schema({
  productId : { // Now mongoDB itself generates an id corresponding to each entry in the database which we will see later
    type : mongoose.Schema.Types.ObjectId,
    ref : Product
  },
  quantity :
  {
    type : Number,
    required : true
  }
}) // No need of writing timestamps here as I am already creating the timstamps in orderSchema

const orderSchema = new mongoose.Schema(
  {
      orderPrice : 
      {
        type : Number,
        required : true,
      },
      customer : {
          type : mongoose.Schema.Types.ObjectId,
          ref : "User"
      },
      orderItems : {
        type : [orderItemSchema],  // Now here question arises idk the number of products ordered by the customer, hence we make use of another mini schema made inside this file only, it need not be exprted as only this file will use it. You can also create array of objects like you made for subToDo key in todo file of todo folder but note here no. of items needed are required hence we have to create the mini schema. In ToDo no. of subToDos were not required hence that approache worked.
        required : true,
      },
      status : { // This will be a string but only ceratin strings will be allowed hence, the enum is used. Here only these three strings are accepted 
        type : String,
        enum : ["PENDING", "CANCELLED", "DELIVERED"],
        default : "PENDING",        
      },
      address : 
      {
        type : String,
        required : true,
      }
  }, {timestamps : true})

export const Order = mongoose.model("Order", orderSchema)