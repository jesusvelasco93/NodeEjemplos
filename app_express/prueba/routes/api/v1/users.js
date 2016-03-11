"use strict"

var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");
var User = mongoose.model("User");
var auth = require("../../../lib/auth");

router.use(auth("admin", "pass2"));

// Get user listing
router.get('/', function(req, res) {

    var sort = req.query.sort || 'name';

    User.list(sort, function(err, rows) {

        if (err) {
            res.json({ result: false, err: err });
            return;
        }

        // Cuando esten disponibles los mando en JSON
        res.json({ result: true, rows: rows });
    });
});

router.post('/', function(req, res) {

    // Instaciamos objeto en memoria
    var user = new User(req.body);
    // Lo guardamos en la Base de Datos
    user.save(function(err, newRow) {
        if (err) {
            res.json({ result: false, err: err });
            return;
        }
        res.json({ result: true, row: newRow });
    });
});

// Actualizamos un user
router.put('/:id', function(req, res) {

    var options = {};
    //Usamos options con multi a true para actualizar varios
    var options = {multi: true};
    User.update({_id: req.params.id}, { $set: req.body}, options, function(err, data){
        if (err) {
            res.json({ result: false, err: err });
            return;
        }
        res.json({ result: true, data: data });  
    });
});

// router.delete('/', function(req, res){
//     User.delete({req.body}, function(err){
//         if (err) {
//             res.json({ result: false, err: err });
//             return;
//         }
//         res.json({ result: true});  
//     });
// });

module.exports = router;