const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username :{
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        regex : "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
    },
    password : {
        type : String,
        required : true
    }
},{timestamps:true});

const User = mongoose.model("User",userSchema);

module.exports = User;