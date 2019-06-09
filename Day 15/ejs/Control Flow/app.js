// var app = require("express")();

// //ROUTES
// app.get('/', function (res, res) {
//     res.send("This is homepage");
// });

// app.get("/love/:thing", function (req, res) {
//     // body...
//     var thingVar = req.params.thing;
//     res.render("love.ejs", {thingVar: thingVar});
// })

// app.get("/posts", function(req, res) {
//     var posts = [
//         {title: "Posts 1", author: "Susy"},
//         {title: "My adorable husky", author: "CHarlie"},
//         {title: "Do you understand", author: "Kalra"}
//         ];
        
//         res.render("posts.ejs", {posts: posts});
// })


// app.listen(process.env.PORT, process.env.IP, function(){
//     console.log('server is listening');
// });

//------------------------------------------------------------------------
/*
 * Styles and Partils
*/

var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

//ROUTES
app.get('/', function (res, res) {
    res.send("This is homepage");
});

app.get("/love/:thing", function (req, res) {
    // body...
    var thingVar = req.params.thing;
    res.render("love.ejs", {thingVar: thingVar});
})

app.get("/posts", function(req, res) {
    var posts = [
        {title: "Posts 1", author: "Susy"},
        {title: "My adorable husky", author: "CHarlie"},
        {title: "Do you understand", author: "Kalra"}
        ];
        
        res.render("posts.ejs", {posts: posts});
})



app.listen(process.env.PORT, process.env.IP, function(){
    console.log('server is listening');
});
















