//create object 
const addlogger = require('./logger')
const addhelper= require('../src/util/helper.js')
const addformatter = require('../validator/formatter')
const _ = require("lodash");
//module1
addlogger.log('heena')

addlogger.welcome()

console.log("this is url:    " + addlogger.url)
//module2
//console.log('date:   '+addhelper.printDate)
addhelper.printDate()
addhelper.printMonth()
addhelper.getBatchInfo()
//console.log("month:   "+addhelper.printMonth)
5
//module3  
addformatter.string3()

//package'lodash'

//chunk
const words=['jan','feb','mar','apl','may','june','july','aug','spt','oct','nov','dec'];
console.log(_.chunk(words,4))
//tail
const list=[1,3,5,7,9,11]
console.log(_.tail(list))
//union
const array=_.union([20,56],[12,13],[23,24],[25,26]);
console.log(array)
//frompair
let pair=[["horror","the shining"],["drama","titanic"],["triller","shutter island"],["fantasy","pans labyrinth"]]
let obj=_.fromPairs(pair);
console.log(obj)







