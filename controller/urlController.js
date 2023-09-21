const shortid = require('shortid');
const urlModel = require("../model/urlModel.js") ;

async function handleShortUrlGenerator(req , res){

    const input = req.body.url  ;

    if(input) {
        const shortId = await shortid() ; 
        await urlModel.create({
            shortUrl : shortId ,
            redirectedUrl : input 
        })
        res.send("URL Created")  ; 
    }else{
        res.send("URL not Valid or Empty") ;
    }

}

async function handleShowUrls(req , res){

    const urlData = await urlModel.find({}); 
    res.send(urlData) ; 

}

async function handleRedirectUrl(req , res) {

    const shortId = req.params.url ; 
    const data = await urlModel.findOneAndUpdate(
        {shortId} , 

        {
            $push : {
                visitHistory : {timestamp : Number(Date.now())  }
            }
        }
        
    ) ; 
    res.redirect(data.redirectedUrl) ;

}

async function handleGetAnalytics(req , res) {

    const shortId = req.params.url ; 
    const data = await urlModel.findOne({shortId}) ; 

    return res.json({
        toatalClicks : data.visitHistory.length  ,
        analytics : data.visitHistory 
    })
}

module.exports = {
    handleShortUrlGenerator ,
    handleShowUrls , 
    handleRedirectUrl ,
    handleGetAnalytics 
}
