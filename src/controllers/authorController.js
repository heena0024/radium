const AuthorModel = require("../models/authorModels.js")
const BookController= require("../controllers/bookcontroller.js")
const getAuthorData = async function (req, res) {
    var data = req.body
    let savedData = await AuthorModel.create(data)
    res.send({ msg: savedData })
}
//List out the books written by Chetan Bhagat
const getChetanData = async function (req, res) {
    let allBook = await AuthorModel.findOne({ author_name: "Chetan Bhagat" }).select({author_id:1, _id:0})
    //const book=await BookModel.find(allBook).select({name:1, _id:0})
    const book = await BookController.authorBooks(allBook)
    console.log(allBook)
    res.send({book })
}


module.exports.getAuthorData=getAuthorData
module.exports.getChetanData=getChetanData
