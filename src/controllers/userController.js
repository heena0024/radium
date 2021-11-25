const userModel = require('../models/userModel')
const loginModel = require('../models/loginModel')

const createUser = async function (req, res) {
    let userDetails = req.body
    let userCreated = await userModel.create(userDetails)
    res.send({data: userCreated})
}



// const getDetails = async function(req,res){
//     let userId = req.params.userId
//     let userDetails = await userModel.findOne({_id:userId,isDeleted:false})
//     if(userDetails){
//         res.send({status:true,data:userDetails})
//     }else{
//         res.send({status:false,message:"user not found"})
//     }
// }

//updated question-------------------------------------------------------------

const getDetails= async function(req,res){
    let token ;
    try{
        if(req.token._id == req.params.userId){
            let userId= req.params.userId
            let userDetails = await userModel.findOne({_id:userId,isDeleted:false})
            if(userDetails){
                res.status(200).send({status:true,data:userDetails})
            }else{
                res.status(404).send({status:false,message:"user not found"})
            }
        }else{
            res.status(404).send({status:false,message:"not authorized"})
        }
    }catch(err){
        res.status(500).send({status:false,message:err.message})
    }
}





// const update = async function(req,res){
//     let userId = req.params.userId
//     let email = req.body.email
//     let userDetails = await userModel.findOneAndUpdate({_id:userId},{email:email},{new:true})
//     if(userDetails){
//         res.send({status : true,message:userDetails})
//     }else{
//         res.send({status:false,msg:"incorrect credential"})
//     }
// }



//updated question------------------------------------------

const update = async function(req,res){
    let token ;
    try{
        if(req.token._id == req.params.userId){
            let userId= req.params.userId
            let email = req.body.email
            let userDetails = await userModel.findOneAndUpdate({_id:userId},{email:email},{new:true})
            if(userDetails){
                res.status(200).send({status:true,data:userDetails})
            }else{
                res.status(404).send({status:false,message:"user not found"})
            }
        }else{
            res.status(404).send({status:false,message:"not authorized"})
        }
    }catch(err){
        res.status(500).send({status:false,msg:err.message})
    }

}







module.exports.createUser = createUser
module.exports.getDetails = getDetails
module.exports.update = update