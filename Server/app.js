var createError = require('http-errors');
var express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var path = require('path');
require('dotenv').config();
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
const expressLayouts = require("express-ejs-layouts");

mongoose.connect('mongodb://localhost:27017/', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

var app = express();
app.use(expressLayouts);
app.set("layout", "./Layouts/mainLayout");
// view engine setup
app.set('views', path.join(__dirname, 'Views'));

app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// Konfiguracja sesji

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // ustaw na true, jeśli używasz HTTPS
}));



// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
// Middleware do przekazywania sesji do wszystkich szablonów
app.use((req, res, next) => {
  res.locals.session = req.session; // Przekazuj sesję użytkownika do wszystkich szablonów
  console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!res.locals.session',req.session);
  next();
});


// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  if (err) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
  } else next();
});

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

module.exports = app;
