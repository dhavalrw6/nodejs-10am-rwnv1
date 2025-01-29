const express = require('express');

const port = 8081;

const app = express();

let users = [];

app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));


app.get('/',(req,res)=>{      
    return res.render('./index',{users});
});

app.post('/create',(req,res)=>{   
    users.push(req.body);  
    return res.redirect(req.get('Referrer') || '/');
})

app.get('/delete/user/:id',(req,res)=>{
    
    const {id,user} = req.params;
    console.log({id,user});
    
    users = users.filter(user => user.id !== id);

    return res.redirect(req.get('Referrer') || '/');
})

app.get('/edit/user/',(req,res)=>{
    let {id} = req.query;
    
    let user = users.filter(user => user.id === id)[0];
    console.log(user);
    
    return res.render('./edit',{user});
})

app.listen(port,(err)=>{
    if(!err){
        console.log("server start.");
        console.log("http://localhost:"+port);
    }
})