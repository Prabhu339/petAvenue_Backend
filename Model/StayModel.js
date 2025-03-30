const mongoose=require("mongoose");
const staySchema=new mongoose.Schema({
    petname:String,
    mobile:String,
    startdate:String,
    endDate:String,
    requirements:String

})
 module.exports=mongoose.model("staySchema",staySchema);