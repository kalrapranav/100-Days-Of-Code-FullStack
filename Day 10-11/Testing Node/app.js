console.log("start server");

To write messgae to the terminal 
console.log("any message");

//To fire a function after a set time 
setTimeout(function() {
    console.log("3 seconds have passed");
}, 3000);

var time = 0;
//To running a function after a certain amount of timr
var timer = setInterval(function (params) {
    time += 2;
    console.log(time + ' seconds have passes');

    if (time > 5) {
        //Stops the interval timer
        clearInterval(timer);
        console.log("Timer Stoped");
    }
}, 2000);

//To get the directory Name
console.log(__dirname);

//To get the Filename Name
console.log(__filename);

//normal function statemnet 
function sayHi() {
    console.log("Hi");
}

//Function Expression
var sayBye = function(){
    console.log('bye');
}
//To save a function in a variable and can be invoked by
//calling the varible
sayBye();


function callFunction(fun) {
    fun();
}

callFunction(sayBye);

//---------------------------------------------------------------------------

/** 
 * Modules and require()
*/
//Modules are code with diffrent files which have diffrent bit of code

//make the use of count.js in app.js file
var counter = require('./count');

console.log(counter(['pranav', 'kalra', 'is', 'don']));

//-----------------------------------------------------------------------------
/*
* Module Patters
*/

//Modules are code with diffrent files which have diffrent bit of code

//make the use of count.js in app.js file
var stuff = require('./stuff');

console.log(stuff.counter(['pranav', 'kalra', 'is', 'don']));
console.log(stuff.adder(3,4));
console.log(`The value of pi is: ${stuff.pi}`);
console.log(stuff.adder(stuff.pi,12));

//---------------------------------------------------------------------------------

/*
* Event Module
 */

 var events = require("events");

 var myEmmiter = new events.EventEmitter();

//  //Listing an event
//  myEmmiter.on('someEvent', function(mssg) {
//     console.log(mssg);     
//  });

//  //emitting that event 
// myEmmiter.emit('someEvent', 'This was passed as param');

var util = require('util');

//Person variable which takes names as parameter 
var Person = function(name) {
    this.name = name;
};

util.inherits(Person, events.EventEmitter);

//creating diffrent Person Objects  
var james = new Person('james');
var mary = new Person('mary')
var ryu = new Person('ryu');

//saving all the events in people array
var people = [james, mary, ryu];

//associiating a event type with every event
people.forEach(function(person) {
    person.on('speak', function (mssg) {
        console.log(person.name + ' said: ' + mssg);
    });    
});

//James will be emitting "hey dudes"
james.emit('speak','hey dudes');
ryu.emit('speak','I want a curry');

//------------------------------------------------------------------------------------

/*
* Reading and Writing Files
 */

 var fs = require('fs');

 //To read file
 fs.readFileSync();
//THis is blocking code as anything under the abve function 
//wont be read until it's execution is finished
























