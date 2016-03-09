'use strict';

var async = require('async');

//Esta funcion obtiene la version dado un nombre
function versionModulo(nombre, callback) {
    console.log(nombre);
    var path = "node_modules/" + nombre + "/package.json";
    var fs = require('fs');
    //El segundo parametro son las opciones
    fs.readFile(path, { encoding: 'utf8' }, function(err, data) {
        if (err)
            return callback(err);

        var paquete = JSON.parse(data);
        callback(err, paquete.version);
    });
}

var fs = require('fs'),
    path = require('path');


//Funcion que nos devuelve todos los directorios de un path
function getDirectories(srcpath) {
  return fs.readdirSync(srcpath).filter(function(file) {
    return fs.statSync(path.join(srcpath, file)).isDirectory();
  });
}

//Usamos eachSeries para llamar recursivamente a versionModulo
//Con un array
async.eachSeries(getDirectories("node_modules/"),
    function(item, next) {
        versionModulo(item, function(err, str) {
            if (err) {
                console.error('Hubo un error: ', err);
            } else {
                console.log('La version del módulo es:', str);
            }
            next();
        })
    },
    function(){
        console.log('Fin eachSeries');
    }
);