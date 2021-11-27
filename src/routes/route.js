const express = require('express');
const router = express.Router();

const cryptoController= require("../controllers/cryptoController")
//const demo= require("../controllers/demo.js")

// 26 nov assignment
router.get("/cryptoCurency", cryptoController.getAssets)

module.exports = router;
//console.log(parseFloat());