const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const myBookSchema= new mongoose.Schema({
        name: {
        type: String,
        required: true
    },
    author: {
        type: ObjectId,
        ref: 'myAuthor'
    },
    //619625338fe4b11dd357c45b  author denno

	price:Number,
	ratings:Number,
    publisher:{
        type:ObjectId,
        ref:'myPublisher'
    }

}, {timestamps: true})

module.exports = mongoose.model( 'myBook', myBookSchema ) 

