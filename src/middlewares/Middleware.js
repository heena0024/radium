const jwt = require("jsonwebtoken")

const tokenchecker = function(req,res,next){

 let token = req.headers["x-auth-token"]
 if(token){
     let decode =jwt.verify(token,"identify")
     if(decode){
         req.token = decode
         next()
     }else{
         res.send({msg:"token cant be verify"})
     }
 }else{
     res.send({msg:"token header is missing"})
 }



}

module.exports.tokenchecker = tokenchecker
