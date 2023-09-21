const express = require("express") ; 
const urlRouter = express.Router();
const 
{
    handleShortUrlGenerator  , 
    handleShowUrls ,
    handleRedirectUrl ,
    handleGetAnalytics
} = require("../controller/urlController.js") ; 

urlRouter.post("/api/" , handleShortUrlGenerator) ;
urlRouter.get("/api/" , handleShowUrls) ;
urlRouter.get("/api/:shortId" ,  handleRedirectUrl) ;
urlRouter.get("/api/analytics/:shortId" ,  handleGetAnalytics) ;

module.exports = urlRouter ;
