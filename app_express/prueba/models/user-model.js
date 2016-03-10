"use strict";

// conectar con driver
// var basedatos = require('../lib/connectMongo');

//conecctar con
var conn = require('../lib/connectMongoose');
var mongoose = require('mongoose');

// Creo el esquema

// Metodos del modelo
var user = {
    getUsers: function(callback){




        //CON EL DRIVER
/*        basedatos.db.collection('agentes').find({}).toArray(function(err, usuariosLeidos) {
            if (err) {
                return callback(error);
            }
            // devuelve users
            callback(null, usuariosLeidos);
        });*/
    }
};

// Exportamos el modelo
module.exports = user;