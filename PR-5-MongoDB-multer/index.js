const express = require('express');
const db = require('./configs/database');
const bodyParser = require('body-parser');
const userModel = require('./models/userSchema');
const imageUpload = require('./middlewares/imageUpload');
const fs = require('fs');

const path = require('path');

const port = 8081;

const app = express();
app.set('view engine','ejs');
// app.use('/uploads',express.static(path.join(__dirname+'/uploads')));
app.use('/uploads',express.static(__dirname+'/uploads'));
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',(req,res)=>{
  
    userModel.find({}).then((users)=>{     
        return res.render('index',{users})
    }).catch((err)=>{
        console.log(err.message);  
        return res.render('index',{users:[]});      
    })
})

app.post('/create',imageUpload,(req,res)=>{
    
    req.body.image = req.file.path;

    userModel.create(req.body).then((data)=>{
        console.log("User Created.");
    }).catch((err)=>{
        console.log(err.message);        
    })

    return res.redirect(req.get('Referrer') || '/');
})

app.get('/user/delete/:id',(req,res)=>{
    let {id} = req.params;
    userModel.findByIdAndDelete(id).then((data)=>{
        fs.unlinkSync(data.image);
        console.log("User Deleted.");      
        return res.redirect(req.get('Referrer') || '/');
    }).catch((err)=>{
        console.log(err.message);
        return res.redirect(req.get('Referrer') || '/');        
    })
})

app.get('/user/edit/:id',(req,res)=>{
    let {id} = req.params;
    userModel.findById(id).then((user)=>{
        return res.render('edit',{user});
    }).catch((err)=>{
        console.log(err.message);
        return res.render('edit',{user:{}});        
    })
})

app.post('/user/edit/:id',(req,res)=>{
    let {id} = req.params;
    userModel.findByIdAndUpdate(id,req.body).then(()=>{
        console.log("user Updated.");
        return res.redirect('/');        
    }).catch((err)=>{
        console.log(err.message);
        return res.redirect('/');        
    })
})

app.listen(port,(err)=>{
    if(!err)
    {
        console.log("Server is start on Port");
        console.log("http://localhost:"+port);        
    }
})