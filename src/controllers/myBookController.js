const myBookModel = require("../models/myBookModel.js");
const myAuthorModel=require("../models/myAuthorModel.js")
const myPublisherModel=require("../models/myPublisherModel")

const mongoose = require("mongoose");

const createMyBook = async function (req, res) {
  const data = req.body;
  let authorId=req.body.author;
  let publisherId= req.body.publisher;  
   
  let  authorFromRequest = await myAuthorModel.findById(authorId)
  let publisherForRequest=await myPublisherModel.findById(publisherId)
  if(!authorFromRequest){
       res.send({msg: "author id  not valid"});
    }else if(!publisherForRequest){
          res.send({msg: " publiser id not valid"});

    }else{
      let bookCreated= await myBookModel.create(data)
      res.send({data: bookCreated})
    }
};
    
//   let checkAuthor=await myAuthorModel.findById(authorId)
  
//   let checkPublisher= await myPublisherModel.findById(publisherId)
  
//   console.log(checkPublisher,"publisher", checkAuthor,"author")
//   if(checkAuthor===null || checkPublisher===null){
//       res.send({msg: "author id and publiser id not valid"})
//   }else{
//      let saveData = await myBookModel.create(req.body)
//      console
//       res.send({data:saveData})
  

//   let  authorFromRequest = await myAuthorModel.findById(authorId)
//   if(authorFromRequest){
//       let bookCreated= await myBookModel.create(data)
//       res.send({data: bookCreated})
//   }else{
//       res.send('the author Id provided is not valid')
//   }
// };


const getBookAndAuthor= async function(req, res){
    let booksData = await myBookModel.find().populate('author').select({author_name:0,address:0});
    
    //console.log(booksData)
    //console.log(authorDetail)
   res.send({data: booksData})
    //res.send({data: authorDetail})
};


const createMyPublisher = async function (req, res){
    let Data=req.body
    let savedData=await myPublisherModel.create(Data)
    res.send({msg: savedData})    

}
module.exports.createMyBook = createMyBook;
module.exports.getBookAndAuthor = getBookAndAuthor;
module.exports.createMyPublisher=createMyPublisher;