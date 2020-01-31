const http = require('http');
const port = 3000;
var fs = require('fs');
var mysql = require('mysql');
var html = fs.readFileSync('index.html');
var indice = fs.readFileSync('indice.html');

const server = http.createServer((req, res) => {
	var parametros=req.url.split("/");
	var parametro1=parametros[1];
	var parametro2=parametros[2];
	var parametro3=parametros[3];

	res.writeHead(200, {"Content-Type": "text/html"});
	res.write(indice);
	res.end();
});
server.listen(port);
console.log('Server running');