"use strict";

var fs = require('fs');

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



versionModulo("./node_modules/async/package.json", function(err,str){
    if (err){
        console.error('Hubo un error:', err);
        return;
    }
    console.log('La version del modulo es:', str);

});
