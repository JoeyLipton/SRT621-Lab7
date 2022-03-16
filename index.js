const port = 8989;
var http = require('http');
var httpStatus = require('http-status-codes');

// Defining various Date related variables
let d = new Date();
let month = ("0" +(d.getMonth() + 1)).slice(-2);
let year = d.getFullYear();
let day = ("0" + d.getDate()).slice(-2);

// Defining various Time related variables
let hours = d.getHours();
let minutes = d.getMinutes();
let seconds = d.getSeconds();

// Putting the Date and Time variable together into string format
let fullDate = day + "/" + month + "/" + year;
let fullTime = hours + ":" + minutes + ":" + seconds;

// Defining function to accept incoming requests 
function onRequest(request, response) {
    response.writeHead(httpStatus.OK, {'Content-Type': 'text/plain'});
    response.write("The current date is: " + fullDate);
    response.write("\n");
    response.write("The current time is: " + fullTime);
    response.end();
}

// Opening HTTP server on port 8989
http.createServer(onRequest).listen(8989);

// EOF