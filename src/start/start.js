/**
 * 
 * How to start a simple http web Server with http module
 * 
 */

var http = require('http');


http.createServer(function (req, res) {
    console.log(req.httpVersion, req.method, req.url);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!');
    
}).listen(8080);

console.log("Server Started at http://localhost:8080");
