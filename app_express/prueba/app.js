var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// MODELOS
require("./models/user-model");

// RUTAS DE WEB
var routes = require('./routes/index');
var users = require('./routes/users');
var admin = require('./routes/admin');

// RUTAS DE API V!
var apiUsers = require('./routes/api/v1/users');

var app = express();

//Orden de ejecucion de arriba a abajo
//Orden de abstracion use->all->(get/set)

//La funcion se queda la peticion y si no decimos nada no pasa al siguiente
//Tener cuidado con responder mas de una vez, error 304
app.use(function(req, res, next){
  // console.log(req.query);
  var algo = req.query.algo || "";
  req.algo = algo;
  //next();
  //res.send("Soy el primero");
  next();
});


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//__dirname es el directorio actual

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// RUTAS DE WEB
app.use('/', routes);
app.use('/users', users);
app.use('/admin', admin);

// RUTAS DE API V!
app.use('/api/v1/users', apiUsers);

// app.get("/ruta", function(req, res){
//   res.send("Hola amigosh");
// });


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
