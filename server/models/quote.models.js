const mongoose = require("mongoose")

const Quote1 = new mongoose.Schema({
    email :{type : String  , require : true},
    quote : {type : String,required : true},
    }
    // {collection:"quote"}
)

const model1 = mongoose.model("Quote",Quote1)

module.exports = model1
