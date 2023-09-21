const mongoose = require("mongoose") ; 

function createDatabaseConnection() {

    mongoose
    .connect("mongodb://127.0.0.1:27017/urlDB")
    .then(()=>{
        console.log("Database Connected") ; 
    })
    .catch((err)=>{
        console.log(err.message) ; 
    })

}

module.exports = createDatabaseConnection ; 
