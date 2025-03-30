const StayModel=require("../Model/StayModel")
const express=require("express")
const router=express.Router();

router.post("/", async (req,res)=>{
    const stay=new StayModel(req.body)
    const result= await stay.save()
    res.send(result)
})

router.get("/", async (req,res)=>{
    const result= await StayModel.find()
    res.send(result)
});
module.exports=router