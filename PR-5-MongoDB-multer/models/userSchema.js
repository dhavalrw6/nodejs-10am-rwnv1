const { default: mongoose } = require("mongoose");

const userSchema =  new mongoose.Schema({
    username : {
        type : String,
        required : true,
        unique : true
    },
    image : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
    },
    password : {
        type : String,
        required : true
    },
    gender : String,
    hobby : Array,
    address : String,
    city : String,
    phone : Number,
},{
    timestamps:true
})

const userModel = mongoose.model('userModel',userSchema);

module.exports = userModel;