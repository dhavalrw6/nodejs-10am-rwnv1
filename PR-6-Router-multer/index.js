const express = require('express');
const port = 8081;
const app = express();

app.set('view engine','ejs');

// app.get('/',(req,res)=>{
//     return res.render('index');
// })

app.use('/',require('./routers'))

app.listen(port,()=> 
    console.log(
        "Server start on Port \nhttp://localhost:"+port
    ));
