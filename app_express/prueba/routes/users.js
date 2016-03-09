var express = require('express');
var router = express.Router();
var user = require("../models/user-model");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// Get user listing
router.get('/form', function(req, res, next) {

    // Pido los datos al modelo
    user.getUsers(function (err, users){

        // Cuando esten disponibles los mando a la vista
        res.render('user_form', { users: users});
    });
});

module.exports = router;
