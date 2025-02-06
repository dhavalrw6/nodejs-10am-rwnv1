const { default: mongoose } = require("mongoose");

mongoose.connect('mongodb+srv://rw6dhavalpl:12345@cluster0.j4jrp.mongodb.net/mongodb-crud')

const db = mongoose.connection;

db.on('connected',(err)=>{
    if(err){
        console.log(err.message);
    }
    else{
        console.log("Database connected..");
        
    }
})

module.exports = db;