const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId
const loginSchema = new mongoose.Schema(
{
   	name:{
           type:String,
           required: true,
           unique: true
       },
    password:{
        type:String,
        required:true,
        unique:true
    }
},{timestamps:true}

);

module.exports = mongoose.model('login', loginSchema)