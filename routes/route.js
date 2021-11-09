const express = require('express');

const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});
//API 1st problm 
//Create an endpoint for GET /movies that returns a list of movies. 
//Define an array of movies in your code and return the value in response.
//Create an endpoint for GET /movies that returns a list of movies.
// Define an array of movies in your code and return the value in response.
router.get('/movie', function(req, res){
    let movie='["fukrey","delhi belly","dabang","rockstar","sathiya"]'
    res.send(movie)

});
//2nd problm           (request have params attribute)
//Create an endpoint GET movies/indexNumber (For example GET /movies/1 is a valid request and 
//it should return the movie in your array at index 1)
router.get('/movies/:movieIndex', function(req, res){
    let movies=["fukrey","delhi belly","dabang","rockstar","sathiya"]
    let list=req.params.movieIndex;
    //let movieIndex=movies[list] //2nd problm
    //res.send(movieIndex)
    //3rd problm
    if(list>movies.length){
        res.send("doesn't exist")
    }else{
        res.send(movies[list])
    }
});


//problm 4
// Write another api called GET /films.
//  Instead of an array of strings define an array of movie objects this time. 
//  Each movie object should have values - id, name. An example of movies array is 
    let filmArr=[{
        "id":1,
        "name":"The Shining"
    },{
        "id":2,
        "name":"Incendies"
    },{
        "id":3,
        "name":"Rang de Basanti"
    },{
        "id":4,
        "name":"Finding Demo"
    }]

router.get('/film',function(req, res){
    res.send(filmArr)
})
   
router.get('/films/:filmId',function(req, res){
    const value = req.params.filmId;
    if(value >= filmArr.length){
        res.send('invalid movie id')
    }else{
        const result= filmArr[value-1];
        res.send(result.name)
    }
})

    
module.exports = router;