const mongoose=require("mongoose")
const addblogSchema=new mongoose.Schema({
    title:String,
    content:String,
    image:String,
    description:String,
    category:String

})
module.exports=mongoose.model("addblogSchema",addblogSchema)