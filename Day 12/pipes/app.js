var http = require('http');

var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/writeMe2.txt');


//taking read stream and piping it to writestream
myReadStream.pipe(myWriteStream);

/*
* Piing data to the client instead of a writeStream
 */

var http = require('http');

var fs = require('fs');


var server = http.createServer(function (req, res) {
    console.log("request was made " + req.url);
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
    myReadStream.pipe(res);
});

server.listen(3000, '127.0.0.1');
console.log('Now listening to PORT 3000');

