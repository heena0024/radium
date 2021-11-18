const myAuthorModel= require("../models/myAuthorModel")



const createMyAuthor= async function (req, res) {
    var data= req.body
    let savedData= await myAuthorModel.create(data)
    res.send({msg: savedData})    
}


const getMyAuthors= async function (req, res) {
    let allAuthors= await myAuthorModel.find()
    res.send({data: allAuthors})
}

module.exports.createMyAuthor= createMyAuthor
module.exports.getMyAuthors= getMyAuthors

