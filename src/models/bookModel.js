const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
       
    bookname:{
        type: String, 
        required:true
    },
    book_author:String, 
    subject:String,
    
 }, { timestamps: true }  

)
module.exports = mongoose.model('bookdetails', bookSchema)