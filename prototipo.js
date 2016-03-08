"use strict";

// Hacer funcion constructora 
var Persona = function(name){
    this.name = name;
};

// Crear una instancia
var luis = new Persona("Luis");

console.log(luis.name);

// Cambiar su protitpo
Persona.prototype.saluda = function() {
    console.log("Hola soy " + this.name);
};

luis.saluda();

var pepe = new Persona("Pepe");

pepe.saluda();


// ------------------ HERENCIA ----------------

//Otra función constructora que hereda de Persona

var Agente = function(name){

    // SUPER, Ejecutamos constructor heredado
    // Lo mismo que llamar a super en otros lenguajes
    Persona.call(this, name);
};


Agente.prototype = new Persona("Soy un prototipo");

var smith = new Agente("Smith");

smith.saluda();

console.log(Object.getPrototypeOf(smith));

console.log(smith instanceof Agente);
console.log(smith instanceof Persona);
console.log(smith instanceof Object);
console.log(luis instanceof Agente);
