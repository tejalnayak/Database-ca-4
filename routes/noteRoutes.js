const  {createNote, getNoteByUserId} = require("../controllers/noteControllers");
const express = require("express");

const router = express.Router();

router.post("/",createNote);
router.get("/:userId",getNoteByUserId);

module.exports = router;
