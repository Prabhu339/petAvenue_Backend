const express=require("express")
const router=express.Router();
const BookModel=require("../Model/BookModel")

router.post("/",async (req,res)=>{
const Book=new BookModel(req.body)
const result=await Book.save()
res.send(result)
})

router.get("/",async (req,res)=>{
    const result=await BookModel.find()
    res.send(result)
})

module.exports=router;