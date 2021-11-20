const login= function (req, res, next) {
    console.log("this a login page ,  ");
    next()    
}

const TC= function (req, res, next) {
    console.log("terms and conditions firstly read these documentation ");
    next()    
}




module.exports.login= login
module.exports.TC= TC
