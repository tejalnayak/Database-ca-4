const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
    title :{
        type : String,
        required : true
    },
    content : {
        type : String,
    },
    createdAt : {
        type : Date,
        default : "pending"
    },
    userId :{
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    }
},{timestamps:true});

const Note = mongoose.model("Note",noteSchema);

module.exports = Note;