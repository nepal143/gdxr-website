const express = require("express");
const app = express()
const cors  = require("cors")
const mongoose = require("mongoose")
const User = require("./models/user.models")
app.use(cors())
app.use(express.json())
let connectionStatus = false
const uri = "mongodb+srv://gdxr_website:gdxr_trial@cluster0.wnh37zr.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp"
function connect(){
    try{
       mongoose.connect(uri)
       connectionStatus = true;
       console.log("success")
    }
    catch(err){
        console.error(err)
    }
}

connect()
app.post('/api/register', async (req , resp )=>{
    try{
        const { name, email, password } = req.body;
        const user = await User.create({name,email,password})
        console.log("passed")
    }
    catch(err){
        // resp.json({status:"error",error:{err}})
        if(err.code == 11000){
            resp.json({status:"duplicate email"})
        }
    }
})
app.listen(4000 , ()=>{
    console.log("running on port ${4000}")
})