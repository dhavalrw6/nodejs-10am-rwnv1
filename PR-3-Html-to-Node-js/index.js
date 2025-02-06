const express = require('express');
const port = 8081;
const app = express();

app.set('view engine','ejs');
app.use(express.static('public'))

app.get('/',(req,res)=>{
    return res.render('index');
})

app.get('/charts',(req,res)=>{
    return res.render('charts');
})

app.listen(port,(err)=>{
    if(!err){
        console.log("server start on Port");
        console.log("http://localhost:"+port);
    }
});