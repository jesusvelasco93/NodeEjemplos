"use strict";

function conArroz(plato) {
    return new Promise(function(resolve, reject){
        resolve(plato + " arroz");
    });
}
function conAjo(plato) {
    return new Promise(function(resolve, reject){
        resolve(plato + " ajo");
        // reject("no hay ajo");
    });
}
function conSal(plato) {
    return new Promise(function(resolve, reject){
        resolve(plato + " sal");
    });
}
function con(plato, ing) {
    return new Promise(function(resolve, reject){
        resolve(plato + " " + ing);
    });
}

var paella = "paella con";

conArroz(paella)
    .then(conAjo)
    .then(conSal)
    .then(function(plato){
        return con(plato, "chorizo");
    })
    .then(function(plato){
        console.log ("Plato de", plato);
    })
    .catch(function(err){
        console.log("Error", err);
    });