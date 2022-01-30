const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/userControllers");

router.post("/",userControllers.registerUser);

module.exports = router;