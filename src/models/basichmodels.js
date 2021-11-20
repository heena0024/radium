const mongoose = require('mongoose')

const accountSchema = new mongoose.Schema({
       
    Gmail_id:{
        type: String, 
        required:true
    },
    UserName_name:String, 
    age:Number,
    address:String,
 }, { timestamps: true }  

)
module.exports = mongoose.model('accountDetails', accountSchema)