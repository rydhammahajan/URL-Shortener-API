const express = require("express") ; 
const app = express() ;
const createDatabaseConnection = require("./connection.js") ; 
const urlRouter = require("./route/urlRoute.js");

//Setting Up Database
createDatabaseConnection() ;

//Middleware
app.use(express.json()) ; 
app.use("/" , urlRouter);

//Listening to the Server
app.listen(8000 , ()=>{
    console.log("Server Started....") ; 
})

//sample change