const express = require('express');
const db = require('./configs/database');
const bodyParser = require('body-parser');
const userModel = require('./models/userSchema');

const port = 8081;

const app = express();
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));


app.get('/',(req,res)=>{
    return res.render('index');
})

app.post('/create',(req,res)=>{

    userModel.create(req.body).then((data)=>{
        console.log("User Created.");
        console.log(data);
    }).catch((err)=>{
        console.log(err.message);        
    })

    return res.redirect(req.get('Referrer') || '/');
})



app.listen(port,(err)=>{
    if(!err)
    {
        console.log("Server is start on Port");
        console.log("http://localhost:"+port);        
    }
})