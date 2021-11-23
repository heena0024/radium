const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId
const userSchema = new mongoose.Schema(
{
   	name:{
           type:String,
           required: true,
           unique: true
       },
    mobile:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        unique:true
    },
    isDeleted:{
        type:Boolean,
        default:false
    }

},{timestamps:true}

);

module.exports = mongoose.model('user', userSchema)