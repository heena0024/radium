const express = require('express');

const router = express.Router();
const userController= require("../controllers/userController")
const loginController= require("../controllers/loginController")

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});


router.post('/users', userController.userRegistration);
router.post('/login', loginController.userlogin);
router.get('/users/:userid', loginController.userdetails);
router.put('/users/:userid', loginController.updateData)
module.exports = router;