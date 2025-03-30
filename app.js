require("./db")
const express=require("express")
const app=express()
const cors=require("cors")
app.use(cors());
app.use(express.json());
const jwt=require("jsonwebtoken")
const users=require("./Model/userModel")
const authMiddle=require("./router/authMiddleware")

const enquiriesModel=require("./Model/enquiriesModel")
const BookModel=require("./Model/BookModel")
const StayModel=require("./Model/StayModel")
const addblogModel=require("./Model/addblogModel")

const enquiries=require("./router/enquiriesRouter");
const Book=require("./router/BookRouter")
const stay=require("./router/StayRouter")
const blog=require("./router/blogRouter")


app.use("/enquiries",enquiries)
app.use("/Book",Book)
app.use("/stay",stay)
app.use("/blog",blog)




//signup
app.post("/signup",async (req, res)=>{
    const {name,email, password, cpassword}=req.body;
    //check for existing users

    const exist = await users.findOne({email:email});
    if(exist){
        res.send({message:"already exists",status:false})
        
    }
    else if(password!==cpassword){
        
      res.send({message:"password and confirm password does not match",status:false})
    }
    else{   
        const user=new users(req.body);
        const result =await user.save();
        res.send({message :"success",status:true});

    }
})

//login

app.post("/login",async (req,res)=>{  
    const {email,password}=req.body;
    const exists=await users.findOne({email:email})
    if(!exists){
        res.send({message:"user not found",status:false})
        console.log("data not found");
        
    }
    else if(exists.password!==password){
        res.send({message:"password does not match",status:false})

    }
    else{
        let payload={
           users:{
            id:exists.id
           }
        }
     const token=jwt.sign(payload,"chinna",{expiresIn:"10m"   })
        res.json({token})
        
       
    }
})
app.get("/dashboard", authMiddle,async (req,res)=>{
    let user= await users.findById(req.users.id)
    if(user){
        res.send(user)
        

        
    }
    
})

app.listen(4000,()=>{
    console.log('server is running on port 4000')
})
