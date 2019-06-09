var express = require("express");
var app = express();
var request = require("request");

app.set("view engine", 'ejs');

app.get("/", (req, res)=> {
   res.render("search"); 
});

app.get('/results', (req, res)=> {
   var query = req.query.search;
   //res.send("it works");
   
   var url = "https://www.omdbapi.com/?s=" + query + "&apikey=thewdb";
   request(url, (error, response, body)=> {
       if(!error && response.statusCode == 200) {
           //var results = JSON.parse(body);
           //res.send(results.Search[0]["Title"]);
           var data = JSON.parse(body);
           //console.log(data);
           res.render("results", {data: data});
       }
   }) 
});

app.listen(process.env.PORT, process.env.IP, ()=> {
    console.log("Movie App has started");
});