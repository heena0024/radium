const express = require('express');
const router = express.Router();

//const authorController= require("../controllers/authorController")
const myBookController= require("../controllers/myBookController")
const myAuthorController= require("../controllers/myAuthorController")
//const myPublisherconroller=require("../controllers/myBookController")


router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});
//API
router.post('/createauthor', myAuthorController.createMyAuthor);
router.post('/createMyBook' ,myBookController.createMyBook);
router.get('/getBooksAndAuthor', myBookController.getBookAndAuthor)
router.post('/createPublisher', myBookController.createMyPublisher)
//
       // "_id": "61967e5a109e97ab31de133e",D.R. riches
//
module.exports = router;