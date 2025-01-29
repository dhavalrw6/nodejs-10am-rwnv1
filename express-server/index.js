const express = require('express');

const app = express();

const port = 8081;

app.set('view engine','ejs')

// app.get('/',(req,res)=>{
//     return res.send("Hello Node js Developers.");
// })

app.get('/',(req,res)=>{
    return res.render('index');
})

app.get('/about',(req,res)=>{
    return res.render('about');
})

app.listen(port,(err)=>{
    if(err)
    {
        console.log("Server not start in port.");
    }
    else
    {
        console.log("server start.");
        console.log("http://localhost:"+port);
        
    }
})