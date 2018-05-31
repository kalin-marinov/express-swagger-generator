const express = require('express');
const path = require('path');
const logger = require('morgan');
const configureSwagger = require('./config/swagger.config');

const indexRouter = require('./routes/index');
const authRouter = require('./routes/auth');
const handleError = require('./modules/error.module');

console.log('starting');



var app = express();
configureSwagger(app);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/', authRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(new Error('Not found'));
});

app.use(handleError);

module.exports = app;
