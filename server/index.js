const express = require("express");
const app = express()
const cors = require("cors");
app.use(cors());
// const port  = 

app.get('/api/register' , (req, resp)=>{
    resp.send("hello");
})
app.post('/api/register', (req , resp )=>{
    // resp.send("hello guys ")
    console.log(req.body);
    resp.json({status :"ok"})

})

app.listen(4000 , ()=>{
    console.log(`running on port ${4000} `)
})