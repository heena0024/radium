const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
       
        name:String,
        author_Id:{type: Number, required:true},
        price:Number,
        ratings:Number   
 }, { timestamps: true }  

)
module.exports = mongoose.model('newBooks', bookSchema)