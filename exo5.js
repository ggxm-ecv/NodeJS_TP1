const http = require('http');

const server = http.createServer((req, res) => {

  

	switch(req.url) {
		case '/welcome':
			res.writeHead(200, {'Content-Type': 'text/plain'});
			res.end('hello world');
			break;
		default:
			res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end('Not found');
			break;
	}
  
});

server.listen(3000, ( ) => console.log('Le serveur tourne sur http://localhost:3000'));