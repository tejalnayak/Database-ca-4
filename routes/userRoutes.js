const {registerUser} = require("../controllers/userControllers");
const express = require("express");

const router = express.Router();

router.post("/",registerUser);

module.exports = router;
