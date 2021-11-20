const express = require('express');
var bodyParser = require('body-parser');
const route = require('./routes/route.js');

const app = express();
// const expressip = require('express-ip');
// app.use(expressip().getIpInfoMiddleware);

// app.get('/', function (req, res) {
//     console.log(req.ipInfo);
// });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const midGlb= function (req, res, next) {
    console.log("Hi I am a GLOBAL middleware, you want to access this page , then login it----->");
    //logic
    next()    
}


const assignmentOfMid=function(req, res, next){
    var currentdate = new Date();
    var datetime = "Last Sync: " + currentdate.getDay() + "/" + currentdate.getMonth() 
    + "/" + currentdate.getFullYear() + " @ " 
    + currentdate.getHours() + ":" 
    + currentdate.getMinutes() + ":" + currentdate.getSeconds();

    let ip=req.ip
    let url= req.originalUrl
    console.log("date:",datetime)
    console.log("IP:",ip)
    console.log("URL:", url)
    next()
}

//global middleware
app.use(midGlb,assignmentOfMid);





const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://user-open-to-all:hiPassword123@cluster0.xgk0k.mongodb.net/heenaDB-database?retryWrites=true&w=majority", {useNewUrlParser: true})
    .then(() => console.log('mongodb running and connected'))
    .catch(err => console.log(err))

app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
	console.log('Express app running on port ' + (process.env.PORT || 3000))
});