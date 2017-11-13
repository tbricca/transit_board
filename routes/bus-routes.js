var express = require("express");
var router = express.Router();
var axios = require('axios');
var apiUrl ='http://api.pugetsound.onebusaway.org/api/where/routes-for-location.xml?key=ec76e3f1-3c97-4f4a-a55e-447cfffa457b&lat=47.6120&lon=-122.335167';

var cityMapper = "https://developer.citymapper.com/api/1/singlepointcoverage/?coord=51.578973%2C-0.124147&key=8d3b8bb18fc668fdf342d8e09fcf3249";

//arrival and departure for a stop
//&lat=47.6120&lon=-122.335167'

// router.get("/bus-routes", function(req, res, next){
//     //input location
//     // var location = req.body.location;
//     console.log("Hit the post route");
//     fetch(apiUrl)
//     .then(function(response) {
//         console.log(response);
//         if(response.ok) {
//             res.send({busRoute:response});
//             return response;
//         }
//         throw new Error("You messed up man");
//     });
// })

router.get("/", function(req, res, next){
    //input location
    // var location = req.body.location;
    console.log("Hit the get route");
    axios.get(cityMapper)
        .then(function(response) {
            console.log( 'resonse', response);
            // if(response.ok) {
                res.json({busRoute:response});
                // return response;
            // }
            // throw new Error("You messed up man");
        });
})

module.exports = router;