// var fs = require('fs');

// var readMe = fs.readFileSync('readMe.txt','utf8', function (err, data) {
//     fs.writeFileSync('writeMe.txt', data)    
// });

// console.log('test');
// //console.log(readMe);

// //fs.writeFileSync('writeMe.txt',readMe);

//---------------------------------------------------------------------------------

/*
* Create and remove directions
 */

//  var fs = require('fs');

// //  //to delete a file
// // fs.unlink('writeMe.txt');

// // //create a directory
// //  fs.mkdirSync('stuff');

// // //remove a directory
// // fs.rmkdirSync('stuff');

// fs.mkdir('stuff', function(){
//    fs.readFile('readMe.txt', 'utf8', function(err, data){
//        fs.writeFile('/d/100-Days-Of-Code-FullStack/Day 12/stuff/writeMe.txt', data);
//    }); 
// });

//-------------------------------------------------------------------------------------
/*
* Clients and Servers
 */

 /**
  * Client   ------(Request)---------> Server
  * Client   <------(Response)-------- Server
  */

//Protocol - set of communication rules, while communication

//Every computer has a seprate IP address and while communication a channel to 
// send information is done by a socket

// Information is send back via TCP protocol form server to clinet via packets

//Ports- When a request is send to a IP address the client or server will only respond if its a 
// specific post

/*
* Creating a Server
 */

 //importing http package from nodejs
 var http = require('http');

 //creating a server with request adn response parametres
 //headers are extra info about the data send
 var server = http.createServer(function (req, res) {
     console.log("request was made " + req.url);
     res.writeHead(200, {'Content-Type': 'text/plain'});
     res.end('Hey Ninjas');
 });

server.listen(3000, '127.0.0.1');
console.log('Now listening to PORT 3000');















































