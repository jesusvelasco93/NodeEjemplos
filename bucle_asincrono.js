"use strict";

// <--Funcion Empieza
console.log("Empiezo");

//Declaro la funcion
var escribeTras2Segundos = function(texto, callback) {
    setTimeout(function() {
        console.log(texto);
        callback();
    }, 500);
};

function serie(arr, fn) {

    if (arr.length == 0) {
        console.log("Finalizo");
        return;
    }
    fn("texto" + arr.shift(), function() {
        serie(arr, fn);
    });
}

serie([1, 2, 3, 4, 5], escribeTras2Segundos);
