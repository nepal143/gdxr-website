const express = require("express");
const app = express()
const cors  = require("cors")
const mongoose = require("mongoose")
const User = require("./models/user.models");
const Quote = require("./models/quote.models")
const jwt = require("jsonwebtoken")
const Chance = require("chance")
const nodemailer = require('nodemailer');
let chance = new Chance();
let code=chance.zip()
app.use(cors())
app.use(express.json()) 
let connectionStatus = false; 
let user_email  = "jadu"; 
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
        resp.json({status:"ok",user:"ok"})
    }
    catch(err){
        // resp.json({status:"error",error:{err}})
        if(err.code == 11000){
            resp.json({status:"duplicate email"})
        }
    }
})
console.log(user_email)
app.post('/api/login', async (req , resp )=>{
    console.log(req.body.email) 
    const user = await User.findOne({email:req.body.email,password: req.body.password})
    user_email = req.body.email ;
    if(user){
        const token = jwt.sign({
            email:user.email,
            name:user.name
        },"secret1234")
        resp.json({status:"ok",user:token}) 
    }
    else resp.json({status:"error",user:"false"})
    // resp.json({status:"ok"})

})
app.post('/api/quote', async (req, resp) => {
    try {
        const { quote } = req.body; 
        console.log(quote);
        const user = await Quote.findOne({ email: user_email });
 
        if (!user) { 

            const quote1 = await Quote.create({ email: user_email, quote: quote });
            console.log("New user and quote added");
        } else {
            // user.email = user_email ;
            user.quote = quote;
            await user.save();
            console.log("Quote updated for existing user");
        }

        resp.json({ status: "ok" ,quote:quote}); 
    } catch (err) {
        if (err.code === 11000) {
            resp.json({ status: "duplicate email" });
        } else {
            resp.json({ status: "error", error: err });
        }
    }
});

app.get('/api/quote', async (req, resp) => {
    const token = req.headers["x-access-token"]
    console.log(token)
    try{
        const decoded = jwt.verify(token,"secret1234")
        
        const user = await Quote.findOne({ email: decoded.email});
        resp.json({status:"ok",quote:user.quote,name:decoded.name,email:decoded.email})
    }
    catch(err){
        console.log(err)
        resp.json({status:"error",error:"invalid-token"})
    }
});

app.post('/api/sendCode',async(req,resp)=>{
    const {email} = req.body
    const user = await User.findOne({email:email})
    if(user){
        code = chance.zip()
        console.log(code)
        const transporter = nodemailer.createTransport({
            service:"gmail",
            secure: true,
            pool:true,
            auth: {
            // TODO: replace `user` and `pass` values from <https://forwardemail.net>
            user: "gdxr.reset@gmail.com",
            pass: "isvc llwg zbuq wovw",
            },
        });
        const  mailOptions = {
            from: 'gdxr.reset@gmail.com',
            to: email,
            subject: `Password Reset!!`,
            text: `Reset code is ${code}`
        };
        
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
            console.log(error);
            } else {
            console.log('Email sent: ' + info.response);
            }
        });
        transporter.close()
        resp.json({status:"ok"})
    }
    else{
        resp.json({status:"invalid"})
    }

})

app.listen(4000 , ()=>{
    console.log(`running on port ${4000}`)
})