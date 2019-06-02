var http = require('http');

var fs = require('fs');


var server = http.createServer(function (req, res) {
    console.log("request was made " + req.url);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
    myReadStream.pipe(res);
});

server.listen(3000, '127.0.0.1');
console.log('Now listening to PORT 3000');

//-----------------------------------------------------------------------------------------

/*
* Serving JSON to the client
 */

var http = require('http');

var fs = require('fs');


var server = http.createServer(function (req, res) {
    console.log("request was made " + req.url);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    
    var myObj = {
        name: 'Pranav',
        job: 'Student',
        age: 29
    };
    //myObj needs to converted into a string
    res.end(JSON.stringify(myObj));
});

server.listen(3000, '127.0.0.1');
console.log('Now listening to PORT 3000');

//when javascript in front end makes a request teh JSON will be the end will be send

//------------------------------------------------------------------------------------

/*
* Basic Routing
 */

var http = require('http');

var fs = require('fs');


var server = http.createServer(function (req, res) {
    console.log("request was made " + req.url);
    
    if (req.url === '/home' || req.url === '/') {
        res.writeHead('200', {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    } else if (req.url === '/contact') {
        res.writeHead('200', {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/contact.html').pipe(res);
    } else if (req.url === '/print') {
        res.writeHead('200', { 'Content-Type': 'text/html' });
        fs.createReadStream(__dirname + '/print.html').pipe(res);
    } else if(req.url === '/api/ninjas') {
        var ninjas = [{name: 'pranav', age: 20}, {name: 'jhanvi', age: 18}];
        res.writeHead('200', {'Content-Type': 'application/JSON'});
        res.end(JSON.stringify(ninjas));
    } else {
        res.writeHead('404', { 'Content-Type': 'text/html' });
        fs.createReadStream(__dirname + '/error.html').pipe(res);
    }
});

server.listen(3000, '127.0.0.1');
console.log('Now listening to PORT 3000');

//----------------------------------------------------------------------------------------------------

//npm install [package name] - to install a package
//npm uninstall [package name] - to uninstall a package

/*
* Package Json File
 */

 //Json file can be used to track packages and see which package it is depended on 
// npm init - to cetate the json file 
// npm install [package name] -save -to keep track of the dependencies
// All the dependencies will be under the dependencies in the json file
// npm install can be used to install all the dependencies listed in the JSON file of an application

/*
* Nodemon
 */

 //Monitor the application file, as any changes in the application file will be monitored and after the
 // changes the server will be restarted

// npm install -g [package name] - will install the package globally

//to start the server use nodemon [file name]

//------------------------------------------------------------------------------------------------------