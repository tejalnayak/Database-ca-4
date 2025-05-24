const User = require("../models/user");
const Note = require("../models/note");

const createNote = async (req,res) =>{
    try {
        const { title, content, createdAt, userId} = req.body;
        const newNote = new Note({ title, content, createAt, userId});
        await newNote.save();
        res.status(201).json(newnote);
    } catch (error) {
        console.error("Error while creating Note",error)
        res.status(500).json({Error : "Error while creating Note"})
    }
}

const getNoteByUserId = async (req,res) =>{
    const { userId } = req.params;
    try {
        const user = await User.findById(userId);
        if(!user){
            return res.status(400).json({message : "Invalid UserId"});
        }

        const tasks = await Task.find({userId:userId});
        res.status(200).json(tasks);
    } catch (error) {
        console.error("Error while fetching Notes",error)
        res.status(500).json({Error : "Error while fetching Notes"})
    }
}

module.exports = {createNote, getNoteByUserId};