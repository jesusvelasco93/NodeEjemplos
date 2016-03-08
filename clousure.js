"use strict";

var creaAgente = function(_edad) {
    var edad = _edad;
    return {
        dimeEdad: function(){
            console.log("Yo tengo " + edad);
            return edad;
        },
        ponEdad: function(_edad){
            edad = _edad;
        }
    }
};

//Cuando le llame la variable agente tendra un objeto
var agente = creaAgente(30);

var smith = creaAgente(22);

console.log(agente.dimeEdad(), smith.dimeEdad());

smith.ponEdad("9");

setTimeout(agente.dimeEdad, 1000);
setTimeout(smith.dimeEdad, 1000);

