const mongoose=require("mongoose");
const { type } = require("os");
const BookSchema=new mongoose.Schema({
   
    name:String,
    phone:String,
    email:String,
    comment:String 

})
module.exports=mongoose.model("BookSchema",BookSchema);