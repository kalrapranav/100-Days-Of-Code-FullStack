var mongoose = require("mongoose");
//mongoose.connect("mongobd://localhost/cat_app");
mongoose.connect("mongodb://localhost/cat_app", { useNewUrlParser: true }, (err, res) => {
if (err) 
    throw err;
console.log('Database online');
});

var catSchema = new mongoose.Schema({
    /*
        The diffrent properties that the data in the parameter has 
    */
    name: String,
    age: Number,
    temprament: String
});

//Modeling the schema into the Cat Object 
var Cat = mongoose.model("Cat", catSchema);

// /*
//     So there, george.save() doesn't save the data to 
//     db but instaed it is only there for using in JS
//     whereas new Cat is the one that save the data to the db
// */

// //Adding a new cat to the database
// var george = new Cat({
//     name: "George",
//     age: 11, 
//     temparment: "Grouchy"
// });

// var george = new Cat({
//     name: "Norris",
//     age: 19, 
//     temparment: "Evil"
// });

// //geroge is saved to the database
// //The call back function tells the error or the object added
// george.save(function(err, cat){
//     if(err) {
//         console.log("Something went wrong");
//     } else {
//         console.log("CAT");
//         console.log(cat);
//     }
// });

//retrive all cats from the database

//------------------------------------------------------------------------------

Cat.create({
    name: "Snow",
    age: 15,
    temparment: "Bland"
}, function(err, cat){
    if(err) {
        console.log(err)
    } else {
        console.log("The cat is added to teh db");
        console.log(cat);
    }
});


Cat.find({}, function(err, cats){
    if(err) {
        console.log(err);
    } else {
        console.log("All teh cats");
        console.log(cats);
    }
});