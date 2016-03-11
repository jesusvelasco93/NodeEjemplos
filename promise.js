"use strict";

var sleep = function(ms){

    var ms = 1000;
    var promesa = new Promise(function(resolve, reject){
        
        setTimeout(function() {

            if (ms % 2 !== 0){
                reject(new Error("Fatal"));
                return;
            }

            resolve({ name: "Jones"});

        }, ms);

    });
    return promesa;
};

var promesa = sleep(1000);

console.log(promesa);

promesa.then(function(datos){
            console.log("promesa terminada", datos);
}).catch(function(err){
         console.error("error", err);
});