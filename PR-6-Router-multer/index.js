const express = require('express');
const port = 8081;
const app = express();

app.set('view engine','ejs');
app.use(express.static('public'))

app.use('/',require('./routers/userRouter'))

app.listen(port,()=> 
    console.log(
        "Server start on Port \nhttp://localhost:"+port
    ));
