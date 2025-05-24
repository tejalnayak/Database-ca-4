const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const userRoutes = require("./routes/userRoutes");
const noteRoutes = require("./routes/userRoutes");

const PORT = process.env.PORT || 5000;
const uri = process.env.MONGO_URI;

const app = express();

app.use(express.json())
app.use("/users",userRoutes);
app.use("/notes",noteRoutes);

mongoose.connect(uri, {useNewUrlParser:true, useUnifiedTopology:true})
.then(()=> {
    app.listen(PORT, ()=> console.log(`Server is running on http://localhost:${PORT}`));
    console.log("MongoDB connected Successfully");
})
.catch((err)=> console.error("MongoDB connection failed",err));