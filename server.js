var express = require('express');
var app = express();
var server = require('http').createServer(app);
var bodyParser = require('body-parser');
var session = require('express-session');
var port = process.env.PORT ||8080;
server.listen(port);
var fs = require('fs');

GLOBAL.PythonShell = require('python-shell');
GLOBAL.pyshell = new PythonShell('mostrar_imagen.py');

var formidable = require('formidable');
var util = require('util');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

    ///////////////////////////////////////////////////////////////////////////////////////////
app.get('/', function(req,res){
		app.use(express.static(__dirname + '/public'));
		res.sendfile(__dirname, + 'basic.html');
});
///////////////////////////////////////////////////////////////////////////////////////////

app.post('/upload', upload);

function upload(req, res){
  if (req.method.toLowerCase() == 'post') {
    // parse a file upload

    var form = new formidable.IncomingForm();
    var files = [];
    form.uploadDir = "upload";
    console.log("Se ha recibido el formulario");

    form.parse(req, function(err, fields, files) {

    var options = {
         mode: 'text',
         pythonOptions: ['-u'],
         args: ['hola', 'mundo', 'xD']
        };

     
	  PythonShell.run('mostrar_imagen.py', options, function(err, result) {
			if (err) throw err;
			console.log(result)
			console.log('finished');
});
    });
    return;
  }
}
//////////////////////////////////////////////////////

console.log('Servidor corriendo en https:localhost:8080');
