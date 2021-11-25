const axios = require("axios");

// res.status(200). send( { data: userDetails } )
//1
const getStatesList = async function (req, res) {
  try {
    let options = {
      method: "get",
      url: "https://cdn-api.co-vin.in/api/v2/admin/location/states",
    };
    const cowinStates = await axios(options);

    console.log("WORKING");
    let states = cowinStates.data;
    res.status(200).send({ msg: "Successfully fetched data", data: states });

  } 
  catch (err) {
    console.log(err.message);
    res.status(500).send({ msg: "Some error occured" });
  }

};

//2
const getDistrictsList = async function (req, res){

    try{ 
        let id= req.params.stateId
        console.log(" state: ", id)

        let options = {
            method: "get",
            url : `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}` //plz take 5 mins to revise template literals here
        }
        let response= await axios(options)

        let districts= response.data
        
        console.log(response.data)
        res.status(200).send( {msg: "Success", data: districts} )

    }
    catch(err) {
        console.log(err.message)
        res.status(500).send( { msg: "Something went wrong" } )
    }
}


//3
const getByPin = async function (req, res){

    try{ 

        let pin= req.query.pincode
        console.log("pin :", pin)
        let date= req.query.date
        console.log("date:", date)
        let options = {
          method : "get",
          url : `http://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        console.log("options", options);
        let response= await axios(options)
        console.log("options:",options)


        let centers= response.data
        console.log(centers)
        res.status(200).send( {msg: "Success", data: centers} )

    }
    catch(err) {
        console.log(err.message)
        res.status(500).send( { msg: "Something went wrong" } )
    }
}

//4
const getOtp = async function (req, res){

    try{ 

         let options = {
          method : "post", // method has to be post
          url : `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
          data: { "mobile": req.body.mobile  } // we are sending the json body in the data 
        }
        let response= await axios(options)

        let id= response.data
        res.status(200).send( {msg: "Success", data: id} )

    }
    catch(err) {
        console.log(err.message)
        res.status(500).send( { msg: "Something went wrong" } )
    }
}
const nameError= async function(req, re){
  let value= req.query.value;
  console.log("vlue:",value)
}
// assignment 
const getWether = async function (req, res){
console.log("hy testing error")
    try{ 

        let city= req.query.city
        //let appid= req.query.appid

        let options = {
         method : "get",
          url : `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=539437aafc6e82b10640262cc23793d8`
        }
        let london= await axios(options)
        console.log(london)


        res.status(200).send( { "data": london.data} );

    }
    catch(err) {
        console.log(err.message)
        res.status(500).send( { msg: "Something went wrong" } )
    }
}

//2
const tempLondon = async function (req, res){

    try{ 

         let options = {
          method : "get", // method has to be get
          url : ` http://api.openweathermap.org/data/2.5/weather?q=London&appid=539437aafc6e82b10640262cc23793d8`,
          data: { "mobile": req.body.mobile  } // we are sending the json body in the data 
        }
        console.log('*****')
        let london= await axios(options)
        console.log(london.data.main.temp)
        //let id= response.data
        res.status(200).send( {msg: "Success", data: london.data.main.temp} )

    }
    catch(err) {
        console.log(err.message)
        res.status(500).send( { msg: "Something went wrong" } )
    }
}
//3rd
const sortedTemp = async function (req, res){

    try{ 

      let cities=["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
      let cityArr=[]
      for (let i=0; i<cities.length; i++){
        let obj={city:cities[i]}
        let options = {
          method : "get", // method has to be get
          url : ` http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=539437aafc6e82b10640262cc23793d8`,
        }

        let london= await axios(options)
        //obj.temp=london.data.main.temp
        //cityArr.push(obj)
        Arr.push({"city":city[i],"temp": london.data.main.temp})
      }
      //console.log("sorted:",sorted)
      let sorted=arr.sort(function(a,b){return paraseFloat(a.temp)- paraseFloat(b.temp);})
      res.status(200).send({msg:"successfull","temp_city":sorted});
    }
    catch(e){
      console.log(e.message);
      res.status(500).send({msg:"some error occured"})
    }
}
module.exports.getStatesList = getStatesList;
module.exports.getDistrictsList = getDistrictsList;
module.exports.getByPin = getByPin;
module.exports.getOtp = getOtp;
module.exports.getWether = getWether;
module.exports.tempLondon = tempLondon;
module.exports.sortedTemp = sortedTemp;