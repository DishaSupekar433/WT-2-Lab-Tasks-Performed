var http = require('http');
var dt = require('./myfirstmodule');
http.createServer(function (req, res) {
res.writeHead(200, {'Content-Type': 'text/plain'});
res.write("The date and time are currently: " + dt.myDateTime());
res.end('\nHello World\n');
}).listen(1337, "127.0.0.1");
console.log('Server running at http://127.0.0.1:1337/');
