"use strict";

var client = require('mongodb').MongoClient;

var dbConnection = {
    db: null
};

client.connect('mongodb://localhost:27017/cursoNode', function(err, conn){
    if (err){
        console.error("cant conect");
        process.exit(1);
    }
    console.log("Connect to" , conn.databaseName, "on", conn.options.url);
    dbConnection.db=conn
});

// Exportamos el modelo
module.exports = dbConnection;