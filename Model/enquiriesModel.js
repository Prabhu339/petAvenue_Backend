const mongoose=require("mongoose");
const { type } = require("os");
const enquirySchema=new mongoose.Schema({
    name:{type:String},
    email:{type:String},
    phone:{type:String},
    
    message:{type:String,},
    subject:{type:String}
})

module.exports=mongoose.model("enquirySchema",enquirySchema);