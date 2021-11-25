const loginModel = require('../models/loginModel')
const userModel = require('../models/userModel')
const jwt = require("jsonwebtoken")

const validate = async function(req, res){
    //let credential = req.body
    let userid = req.body.name;
    let passwordid =req.body.password;
    let usercredential = await userModel.findOne({name:userid,password:passwordid,isDeleted:false});
    
    if(usercredential){
        let identity = {_id:usercredential._id}
        let token = jwt.sign(identity,"identify")
        res.header('x-auth-token',token);
        res.send({status : true,"msg":usercredential});
    }
    else{
        res.send({status:false,msg:"Invalid Credential"})
    }

}
module.exports.validate = validate
