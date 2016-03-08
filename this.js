//Si no usamos el modo strict el programa no falla porque asigna el this al contexto global
"use strict";

//Hacer un objeto con métodos

var persona = {
    name: "Luis",
    printName: function(){
        console.log(this.name);
    }
};

var mascota = {
    name: "Toby"
};

persona.printName();

//Llamarlo sin this

setTimeout(persona.printName.bind(persona), 1000);

//Mismo que setTImeout sin tiempo
//Función que ejecuta otra función
function saluda(func){
    func();
}

persona.printName.call(mascota);

//Llamada a la función con la función a ejecutar
saluda(persona.printName.bind(mascota));