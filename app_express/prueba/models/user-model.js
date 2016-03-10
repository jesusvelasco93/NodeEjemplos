"use strict";

var basedatos = require('../lib/connectMongo');

// Metodos del modelo
var user = {
    getUsers: function(callback){
        basedatos.db.collection('agentes').find({}).toArray(function(err, usuariosLeidos) {
            if (err) {
                return callback(error);
            }
            // devuelve users
            callback(null, usuariosLeidos);
        });
    }
};

// Exportamos el modelo
module.exports = user;