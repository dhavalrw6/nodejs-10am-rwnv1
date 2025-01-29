const http = require('http');
const handleRequest = require('./controllers/requestCont');
// const handleRequest = require('./controllers/requestController');
const port = 8081;

// const handleRequest = (req,res)=>{
//     res.write("Hello World!");
//     res.end();
// }

const server = http.createServer(handleRequest);

server.listen(port,(err)=>{
    if(err)
    {
        console.log("Server not start on Port");
    }
    else
    {
        console.log("server start");
        console.log("http://localHost:"+port);        
    }
})