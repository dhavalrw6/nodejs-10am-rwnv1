const fs = require('fs');

const handleRequest = (req,res)=>{
    let fileName = req.url == '/' ? 'index.html' : '.' +req.url+ '.html';

    fs.readFile(fileName,(err,result)=>{
        if(err)
        {
            res.write('<h1 style="text-align:center">Error</h1>');            
            res.write("<h2 style='text-align:center'>404 Page Not Found..</h2>");            
            res.end();
        }   
        else
        {
            res.end(result);
        }
    })

}

module.exports = handleRequest;