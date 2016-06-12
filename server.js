// dependencias del proyecto,tienes que tener instaladas antes para que corra tu codigo
var express = require('express');
var app = express();
var formidable = require('formidable');
var server = require('http').createServer(app);
var port = process.env.PORT ||8080;
server.listen(port);
GLOBAL.PythonShell = require('python-shell');
// Hasta la linea anterior terminan las dependencias

// Definimos el archivo a python a llamar mas adelante cuando se obtenga una imagen del usuario tomada desde el navegador
GLOBAL.pyshell = new PythonShell('mostrar_imagen.py');


///////////////////////////////////////////////////////////////////////////////////////////
app.get('/', function(req,res){
		app.use(express.static(__dirname + '/public')); // con esta linea servimos la pagina
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
    console.log("Se ha recibido la imagen");

    form.parse(req, function(err, fields, files) {
      console.log(files.webcam.path);  // aqui puedes ver el path donde guarda la imagen nodejs
          //este es el argumento que necesita python para encontrar la imagen

    var options = {
         mode: 'text',
         pythonOptions: ['-u'],
         args: [files.webcam.path]  // Aqui pasamos la ruta de la imagen al python
        };

     
	  PythonShell.run('mostrar_imagen.py', options, function(err, result) {
			if (err) throw err;
			console.log('result: %j', result); // aqui vemos los resultados de la ejecucion del codigo
			console.log('finalizado el programa'); // Este mensaje lo muestra cuando el programa se cierra
});
    });  // termina el codigo de form.parse(req,function(err,fields,files){
    return;
  }
}     // cierra la llave de la funcion upload

//////////////////////////////////////////////////////////////////////////////

console.log('Servidor corriendo en localhost:8080');
