"use strict";

//cargar la libreria fs de node
var fs = require('fs');

// leer fichero de texto en utf8 y seacar en consola
// su contenido

fs.readFile('./package.json', {encoding: 'utf8'}, function(err, data){
    if (err) {
        //Return solo para la ejecucion, no retorna console.log
        return console.log("ERROR!" , err);
    }

    //Convertimos en String el JSON
    var paquete = JSON.parse(data);

    //Para hacerlo al reves Stringify



    console.log(paquete);
    console.log("FIN");
});