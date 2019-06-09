# POST REQUESTS

* Used when added data 
* app.post() - POST is used to send data to a server to create/update a resource
* req.body() - contains all the data from the request
* body-parser package is used to parse the req body into readbale text 
* app.use(bodyParser.urlencoded({extended: true})); to use body-parser in the app 
* req.body.newFriend , newFriend is the variable set up for the request