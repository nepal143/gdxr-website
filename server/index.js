const express = require("express");
const app = express()
// const port  = 

app.get('/', (req , resp )=>{
    resp.send("hello guys ")
})

app.listen(4000 , ()=>{
    console.log(`running on port ${4000} `)
})