const http = require('http');
const fs = require('fs');

http.createServer(function(req, res) {
 
  res.writeHead(200, { 'Content-Type': 'text/html' });
  
  let htmlString = fs.readFileSync(__dirname + '/index.html', 'utf8'); // return buffer;
  const message = 'Javascript';
  htmlString = htmlString.replace('{Message}', message);


  res.end(htmlString);

}).listen(1337, '127.0.0.1');