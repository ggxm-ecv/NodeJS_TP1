const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {

  const queryObject = url.parse(req.url,true).query;

  res.writeHead(200, {'Content-Type': 'text/plain'});

  res.end('Your message: ' + queryObject.message);

});

server.listen(3000, ( ) => console.log('Le serveur tourne sur http://localhost:3000'));