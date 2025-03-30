const express=require("express");
const enquiriesModel=require("../Model/enquiriesModel");
const router=express.Router();

router.post("/",async(req,res)=>{
    const enquiry=new enquiriesModel(req.body)
    const result=await enquiry.save()
    res.send(result)
})
router.get("/",async (req,res)=>{
    const result=await enquiriesModel.find()
    res.send(result)
})
module.exports=router;