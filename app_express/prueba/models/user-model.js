"use strict";

var users = [
    { name: "Smith", age: "30" },
    { name: "Juan", age: "20" }
];

var user = {
    getUsers: function(){
        return users;
    }
};

module.exports = user;