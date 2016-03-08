"use strict";

var events = require("events");
var eventEmitter = new (require("events")).EventEmitter();

eventEmitter.on("llamada de telefono", function(){
    console.log("ring ring");
});

eventEmitter.on("llamada de telefono", function(){
    console.log("brr brr");
});

eventEmitter.emit("llamada de telefono");