const { default: mongoose } = require("mongoose")
const addblogModel=require("../Model/addblogModel")
const express=require("express")
const router=express.Router()

router.post("/",async (req,res)=>{
    const blogdata=new addblogModel(req.body)
    const result=await blogdata.save()
    res.send(result)
})

router.get("/", async (req,res)=>{
    const result=await addblogModel.find()
    res.send(result)
})
//read one
router.get("/:_id",async (req,res)=>{
    const query={_id:req.params._id}
    const result=await addblogModel.findOne(query)
    res.send(result)
})



module.exports=router;