var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", (req, res)=> {
    res.render("landing");
});

app.get("/campgrounds", (req, res)=> {
   var campgrounds = [
            {name: "Samon", image: "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.VfYOyHeqpuhqRJqCGBwYagHaEn%26pid%3DApi&f=1"},
            {name: "himalays", image: "https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.destination360.com%2Fasia%2Fchina%2Fimages%2Fs%2Fhimalayas-mountains.jpg&f=1"},
            {name: "camp fake", image: "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fwun.ac.uk%2Fpersistent%2Farticle_images%2Fhimalayas_jadu.jpeg&f=1"}
       ];
    res.render("campgrounds", {campgrounds: campgrounds});   
});

app.listen(process.env.PORT, process.env.IP, ()=> {
    console.log("Yelp Camp has started");
});