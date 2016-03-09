"use strict";

// Datos
var users = [
    { name: "Smith", age: "30" },
    { name: "Juan", age: "20" }
];

// Metodos del modelo
var user = {
    getUsers: function(callback){
        // Imaginamos que lee un fichero
        var usariosLeidos = users;

        // Devuelvo users
        callback(null, users);
    }
};

// Exportamos el modelo
module.exports = user;