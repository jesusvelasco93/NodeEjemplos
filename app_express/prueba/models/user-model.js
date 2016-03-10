"use strict";

// conectar con driver
// var basedatos = require('../lib/connectMongo');

//conecctar con
var conn = require('../lib/connectMongoose');
var mongoose = require('mongoose');

// Creo el esquema
var userSchema = mongoose.Schema({
    name: String,
    age: Number
});

userSchema.statics.list = function(cb){
    // Preparamos la Query sin ejecutarla (No ponemos callback a find)
    var query = User.find({});

    // Añadimos mas parámetros a la query
    query.sort("name");
    
    // La ejecutamos
    query.exec(function(err, rows){
        if (err){
            cb(err);
            return;
        }
        cb(null, rows);
    });
};
// Lo registro en mongoose
var User = mongoose.model("User", userSchema);

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

        //CON MONGOOSE
        var User = mongoose.model("User");

        User.find({}, function(err, datos) {
            if (err) {
                callback(err);
                return;
            }
            callback(null, datos);
            return;
        });
    }
};

// Exportamos el modelo
module.exports = user;