const express = require('express');
const router = express.Router();
const bookModel = require("../models/bookModel")
const authorModel = require("../models/authorModels")

const authorController= require("../controllers/authorController.js")

const bookController = require("../controllers/bookController")
router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

router.post('/createBook', bookController.getBookData);

router.post('/createAuthor', authorController.getAuthorData);

router.get('/getChetanBook', authorController.getChetanData);

router.get('/twoState', bookController.twoState);

router.get('/priceBook', bookController.priceBook);


//router.get('/updateAuthor',Controllers.updateAuthor)

module.exports = router;