const http = require('http');
const port = 3000;
var os = require('os');
var dns = require("dns");
os.hostname();
var fs = require('fs');

var mysql = require('mysql');

var html = fs.readFileSync('index.html');
var indice = fs.readFileSync('indice.html');

const server = http.createServer((req, res) => {
  var parametros=req.url.split("/");
  var parametro1=parametros[1];
  var parametro2=parametros[2];
  var parametro3=parametros[3];
  var connection = mysql.createConnection({
		host     : 'localhost',
		user     : 'root',
		password : 'GX9qcxth..',
		port     : 3306,
		database : 'base'
  });
  try 
  		{
      var consultaSQL="SELECT * FROM usuarios";
			connection.connect();
			connection.query(consultaSQL, function (err, result, fields) {
          if (err) throw err;
          res.writeHead(200, {"Content-Type": "text/json"});
    			res.write(JSON.stringify(result));
          res.end();
			});
		    connection.end();
		}
		catch(error) 
		{
			log_consola(error);
		}
});

dns.lookupService('127.0.0.1', port, (err, hostname, service) => {  
	console.log("Nombre: "+hostname+" puerto: "+service);  
	  // Prints: localhost  
  });

server.listen(port);
  console.log('Server running'+os.hostname());

