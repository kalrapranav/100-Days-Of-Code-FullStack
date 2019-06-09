// console.log("Sever is listening");
// var express = require("express");    
// var app = express();

// //ROUTES

// app.get("/", function(req, res) {
//     res.send("This is / route");
// });

// app.get("/dog", function(req, res) {
//     res.send("This is /dog route");
// });


// app.get("/conatct", function(req, res) {
//     res.send("This is /contact route");
// });

// //Initializing the IP address and PORT for the express app 
// app.listen(process.env.PORT, process.env.IP, function () {
//     console.log("Server has started");
// });

//------------------------------------------------------------------------
/*
    More Routing
*/

// console.log("Sever is listening");
// var express = require("express");    
// var app = express();

// //ROUTES

// app.get("/", function(req, res) {
//     res.send("This is / route");
// });

// app.get("/dog", function(req, res) {
//     res.send("This is /dog route");
// });


// app.get("/conatct", function(req, res) {
//     res.send("This is /contact route");
// });

// app.get("/r/subRedditName", function(req, res) {
//     console.log(req);
//     res.send("This is a subReddit of name:");
    
// })
// app.get("*", function(req, res) {
//     req.send("You are a star");
// })

// //Initializing the IP address and PORT for the express app 
// app.listen(process.env.PORT, process.env.IP, function () {
//     console.log("Server has started");
// });

//-----------------------------------------------------------------------
/*
    Express routing assingment
*/
var express = require("express");
var app = express();

//Routes
app.get("/", function (req, res){
    // body...
    res.send("This is / route");
    console.log("The server is at " + req.params.name);
});

//ROUTE for /speak/animal
app.get("/speak/:animal", function(req, res){
    var sounds = {
      pig: "Oink",
      cow: "moo",
      fish: "blabber"
    };
    var animal = req.params.animal;
    var sound = sounds[animal];
    
});

app.listen(process.env.PORT, process.env.IP, function() {
    // body...
    console.log("Server is listening");
});














