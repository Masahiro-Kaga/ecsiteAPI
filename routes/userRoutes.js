const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/userControllers");
const auth = require("../auth");
const {verification} = auth;

router.post("/",userControllers.registerUser);
router.post("/login",userControllers.loginUser);
router.post("/setUserAsAdmin",verification,userControllers.setUserAsAdmin);

module.exports = router;