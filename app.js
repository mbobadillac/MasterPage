const http = require('http');
const port = 3000;
var os = require('os');
var dns = require("dns");
os.hostname();
var fs = require('fs');
var html = fs.readFileSync('index.html');
var indice = fs.readFileSync('indice.html');

const server = http.createServer((req, res) => {
  var parametros=req.url.split("/");
  var parametro1=parametros[1];
  var parametro2=parametros[2];
  var parametro3=parametros[3];

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html'); 
  console.log(parametro1.toUpperCase());
  if(parametro1.toUpperCase()==="INDICE")
  {
	res.write(indice);  
  }
  else{
	res.write(html);  
  }
  res.end();
});

dns.lookupService('127.0.0.1', port, (err, hostname, service) => {  
	console.log("Nombre: "+hostname+" puerto: "+service);  
	  // Prints: localhost  
  });

server.listen(port);
  console.log('Server running'+os.hostname());

