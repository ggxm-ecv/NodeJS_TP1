const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.writeHead(200, {'Content-Type': 'application/json'});
  var json = JSON.stringify({
    "firstname": "Gautier",
    "lastname": "Maire",
    "birthdate": "05/07/1996",
    "color": "#121212",
  });
  res.end(json);
});

server.listen(3000, ( ) => console.log('Le serveur tourne sur http://localhost:3000'));