// var request = require('request');
// request('http://www.google.com', function (error, response, body) {
//   console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });

/*
    Making a http request
*/

var request = require("request");
request('http://www.reddit.com', function(error, response, body) {
    //error param hold all the errors
    if(error) {
        console.log("Something went wrong");
        console.log(error);
    } else {
        if (response.statusCode == 200) {
            //Things worked
            //200 response code shows that the page is there
            console.log(body);
        }
    }
});

//---------------------------------------------------------------------------
