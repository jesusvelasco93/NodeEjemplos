"use strict";

var async = require('async');

// <--Funcion Empieza
console.log("Empiezo");

//Declaro la funcion
var escribeTras2Segundos = function(texto, callback) {
    setTimeout(function() {
        console.log(texto);
        callback();
    }, 500);
};


async.eachSeries([1, 2, 3, 4, 5], 
    function cada(item, siguiente){
        escribeTras2Segundos("texto" + item, function(){
            var resultado = item % 2 ? null : "error";
            siguiente(resultado);
        });
    },

    function fin(err){
        console.log("Finalizo", err)
    }
);