"use strict";

// <--Funcion Empieza
console.log("Empiezo");

//Declaro la funcion
var escribeTras2Segundos = function(texto, callback) {
    setTimeout(function(){
        console.log(texto);
        callback();
    }, 2000);
};

//Llamada a la funcion
// <--Primera llamada a la funcion
escribeTras2Segundos("Texto", function(){
    // <--Segunda llamada a la funcion
    escribeTras2Segundos("Texto2", function(){
        // <--Funcion acaba
        console.log("Finalizo");
    });
});