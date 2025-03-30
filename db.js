const mongoose=require("mongoose")
//const url="mongodb://localhost:27017/fire";
const url="mongodb+srv://magapuchinni:CB2HuUhttJz6Wu8R@cluster0.bj2fhae.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(url)
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.error('Could not connect to MongoDB...'))