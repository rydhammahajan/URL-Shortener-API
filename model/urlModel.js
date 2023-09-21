const mongoose = require("mongoose") ; 

const urlSchema = new mongoose.Schema({

    shortUrl : {
        type : String , 
        unique  : true ,
        required : true
    } , 
    redirectedUrl : {
        type : String ,
        required : true
    } ,
    visitHistory : [{
        timestamp : {type : Number} 
    }]
}, {timestamps : true})

const urlModel = mongoose.model("urlModel" , urlSchema) ; 

module.exports = urlModel ; 
