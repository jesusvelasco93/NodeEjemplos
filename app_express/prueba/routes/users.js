var express = require('express');
var router = express.Router();
var user = require("../models/user-model");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/form', function(req, res, next) {
  res.render('user_form', { users: user.getUsers()});
});

module.exports = router;
