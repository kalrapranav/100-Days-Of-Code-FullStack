var app = require("express")();

//ROUTES
app.get('/', function (res, res) {
    // body...
    // res.send("Welcome to homepage");
    // res.send("<h1>Welcome to homepage</h1>");
    res.render("dogs.ejs");
});

app.get("/love/:thing", function (req, res) {
    // body...
    var thingVar = req.params.thing;
    res.render("love.ejs", {thingVar: thingVar});
})



app.listen(process.env.PORT, process.env.IP, function(){
    console.log('server is listening');
});