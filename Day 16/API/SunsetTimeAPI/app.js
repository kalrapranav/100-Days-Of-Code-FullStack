const request = require("request");

//console.log("Sunset in Hawaii is at...");
request("https://jsonplaceholder.typicode.com/users/1", (error, response, body) =>{
    //eval(require("locus"));
    if(!error && response.statusCode == 200) {
        const parsedData = JSON.parse(body);
        //console.log("Name of the perosn is ")
        console.log("The perosn's credentials are: \n");
        console.log("Name: " + parsedData.name + ' \n');
        console.log("Email: " + parsedData["email"] + ' \n');
        console.log("Address: " + parsedData["address"]["street"] + ' \n');
        
    }
});