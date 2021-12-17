const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'application/json'});
  var json = JSON.stringify({
    "message": "Hello world",
    "status": 200,
  });
  res.end(json);
});

server.listen(3000, ( ) => console.log('Le serveur tourne sur http://localhost:3000'));