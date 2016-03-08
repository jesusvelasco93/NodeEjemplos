"use strict"

var fs = require('fs');
var async = require('async');

function versionModulo(url, callback){
    fs.readFile(url, {encoding: 'utf8'}, function(err, data) {
         if (err) {
             //Return solo para la ejecucion, no retorna console.log
             callback(err);
         }
         else{
         //Convertimos en String el JSON
            var fichero = JSON.parse(data);
            callback(null, fichero.version);
        }

      });
 };


function versionModulos(callback) {
    fs.readdir("./", function(err, files) {
        if (err) {
            console.error("Hubo un error: ", err);
        }
        console.log(files);
        console.log(files[0]);
        // async.concat(files, verQueEs, function(err, dir){
        // if (err) {
        //   callback(err);
        // }

        //     callback(null, result);

    // files is now a list of filenames that exist in the 3 directories
});
        // async.concat(files, console.log("Fichero"), function(err, result) {
};

versionModulos(function(err, moduleArr) {
    if (err) {
        console.error("Hubo un error: ", err);
    }
    console.log("Los módulos son: ", moduleArr);
});