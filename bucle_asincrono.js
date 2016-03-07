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

function serie(i, fn){

    fn("texto" + i, function(){
        i--;
        if (i == 0) {
            console.log("Finalizo");
            return;
        } 
        serie(i, fn);
    });
}

serie(5, escribeTras2Segundos);