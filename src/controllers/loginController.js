
const userModel = require("../models/userModel");
const jwt= require("jsonwebtoken")
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId

const userlogin = async function (req, res,next) {
  let userName= req.body.name
  let userPwd=req.body.password


if(userName && userPwd){
     let user = await userModel.findOne({name: userName, password: userPwd, isDeleted: false})
     if(user){
         let payload={userid :user._id}
        var token = jwt.sign(payload, 'shhhhh');
        res.send({status:true, data:{userId:user._id},token:token})

     }else{
            res.send({message: 'username or password are invalid or user is deleted'})
     }
    }else{
        res.send({msg: "user name and password are not given"})
    }
        next()
    };
const userdetails= async function(req,res){

    let token=req.headers["x-auth-token"];
    var decoded = jwt.verify(token, 'shhhhh');
   
    let pUserId=req.params.userid.trim()
    if(decoded.userid===pUserId){

         let user = await userModel.findOne({_id:pUserId}).catch(e=>console.log("error"))
        if(user){
            res.send({status:true, data:user})
        }else{
            res.send({msg:"userid not found"})
        }
    }else{
        res.send({sataus:false, msg:""})
    }
    
}

let updateData= async function(req,res){
    let token=req.headers["x-auth-token"];
    try{
    var decoded = jwt.verify(token, 'shhhhh');
    }catch(e){
        
        res.send({msg:e.message})
        
        return ;
    }
    let pUserId=req.params.userid.trim()

    if(decoded.userid===pUserId){
        let doc = await userModel.findOneAndUpdate({_id:pUserId},{email:req.query.email});
        res.send({msg:"updated"})
    }else{
        res.send({msg:"userid not authorised to update"})
    }

   
}
module.exports.userdetails=userdetails;
module.exports.userlogin = userlogin;
module.exports.updateData=updateData;