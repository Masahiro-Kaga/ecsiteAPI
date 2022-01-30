const express = require("express");
const router = express.Router();
const productControllers = require("../controllers/productControllers");
const auth = require("../auth");
const {verification} = auth;

router.get("/retrieveAllActive",productControllers.retrieveAllActive);

router.post("/createProduct",verification,productControllers.createProduct);

module.exports = router;