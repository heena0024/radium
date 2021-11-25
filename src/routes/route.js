const express = require('express');
const router = express.Router();

const cowinController= require("../controllers/cowinController")

router.get("/cowin/states", cowinController.getStatesList)
router.get("/cowin/districts/:stateId", cowinController.getDistrictsList)
router.get("/cowin/centers", cowinController.getByPin)
router.post("/cowin/getOtp", cowinController.getOtp)
router.get("/getWether", cowinController.getWether)
router.get("/londonTemp", cowinController.tempLondon)
router.get("/sortedTemp", cowinController.sortedTemp)


module.exports = router;