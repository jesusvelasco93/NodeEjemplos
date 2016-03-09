"use strict";

// Datos
var users = [
    { name: "Smith", age: "30" },
    { name: "Juan", age: "20" }
];

// Metodos del modelo
var user = {
    getUsers: function(){
        return users;
    }
};

// Exportamos el modelo
module.exports = user;