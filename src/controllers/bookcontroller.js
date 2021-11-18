const BookModel = require("../models/bookModel.js")
const AuthorModel= require("../models/authorModels.js")

const mongoose = require("mongoose")
const AuthorController = require("../controllers/authorController.js")

const getBookData = async function (req, res) {
    var data = req.body
    let savedData = await BookModel.create(data)
    res.send({ msg: savedData })
}
const authorBooks = async function (x) {
    let savedData= await BookModel.find(x).select({name:1, _id:0})
    return savedData;
}


//find the author of “Two states” and update the book price to 100;  
//Send back the author_name and updated price in response
const twoState= async function (req, res) {
    let savedData=await BookModel.findOne({name:"Two states"}).select({author_id:1, _id:0})
    let author= await AuthorModel.findOne(savedData).select({author_name:1, _id:0})
    let uPrice = await BookModel.findOneAndUpdate({ name: "two states" },{price:100},{new:true}).select({price:1, _id:0})
    res.send({ msg:author,uPrice })
}

////find the books which costs between 50-100(50,100 inclusive) and respond back with theauthor name of respectivebooks
const priceBook=async function(req, res){
    const book = await BookModel.find({price:{$gt:50 ,$lt:101}}).select({author_id:1, _id:0})
    const author1 = await AuthorModel.find({$or :book}).select({author_name:1, _id:0})
    res.send(author1)
}

module.exports.twoState = twoState
module.exports.priceBook = priceBook

module.exports.getBookData = getBookData
//module.exports.getChetanData = getChetanData
module.exports.authorBooks = authorBooks