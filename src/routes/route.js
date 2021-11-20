const { application } = require('express');
const express = require('express');
const router = express.Router();
var middleware = require('../middlewares/basicmiddleware.js');

const basicController= require("../controllers/basiccontroller")


router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});




router.post('/createAccount',middleware.TC ,middleware.login, basicController.createAccount);


router.post('/createbook',basicController.getBooksData);

module.exports = router;