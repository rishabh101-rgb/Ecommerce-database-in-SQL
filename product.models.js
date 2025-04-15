const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
  description : 
  {
    type : String,
    required : true
  },
  name : {
    type : String,
    required : true
  },
  productImage : {
    type : String, // Usually images are stored ina cloud service and the url is saved in DB hence string type. Else they have to be stored as buffer in the DB and DBs are not made for storing buffers as they occupy lot of space
    required : true
  },
  price : 
  {
    type : Number,
    required : true
  },
  category : 
  {
      type : mongoose.Schema.Types.ObjectId,
      ref : "Categories",
      required : true 
  },
  stock : 
  {
    default : 0,
    type : Number
  },
  owner :
  {
    type : mongoose.Schema.Types.ObjectId,
    ref : "User",
  },
}, {timestamps : true})

export const Product = mongoose.model("Product", productSchema)