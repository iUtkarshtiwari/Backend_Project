const { name } = require('ejs');
const mongoose=require('mongoose');
const connect =mongoose.connect("mongodb://localhost:27017/login-tut");

connect.then(()=>{
    console.log("Database connecteed Sccessfully");

})
.catch(()=>{ 
    console.log("Database cannot be connected");
})

const LoginSchema=new mongoose.Schema({
    name: {
        type:String,
    required:true
    },
    password: {
        type:String,
        required:true
    }
});



const collection =new mongoose.model("users",LoginSchema);
module.exports=collection;

