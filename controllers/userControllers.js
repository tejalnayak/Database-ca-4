const User = require("../models/user");

const registerUser = async (req,res) =>{
    try {
        const { username, email, password} = req.body;
        if(!username || !email || !password){
            return res.status(400).json({message : "Fulfill the requirements"});
        }

        const newUser = new User( { username, email, password});
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        console.error("Error while registering User",error)
        res.status(500).json({Error : "Error while registering User"})
    }
}

module.exports = {registerUser}