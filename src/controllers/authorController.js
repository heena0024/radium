const AuthorModel = require("../models/authorModels")
const BookController= require("../controllers/bookcontroller")

const getAuthorData = async function (req, res) {
    var data = req.body
    let savedData = await authorModel.create(data)
    res.send({ msg: savedData })
}



//List out the books written by Chetan Bhagat
const getChetanData = async function (req, res) {
    let allBook = await authorModel.findOne({ author_name: "Chetan Bhagat" }).select({author_id:1, _id:0})
    const book = await BookModel.authorBooks(allBook)
    console.log(allBook)
    res.send({ msg: allBook })
}


module.exports.getAuthorData=getAuthorData
module.exports.getChetanData=getChetanData
