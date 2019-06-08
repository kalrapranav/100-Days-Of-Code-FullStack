var express = require('express');
var app = express();


app.get("/", function (req, res) {
    res.sendFile(__dirname + 'index.html');
});

app.get("/profile/:name", function (req , res) {
    res.send('THis is a dynamic reuest from: ' + req.params.name);
})

app.listen(3000);