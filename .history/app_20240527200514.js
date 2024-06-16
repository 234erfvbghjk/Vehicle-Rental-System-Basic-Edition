var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/usersRouter');
const rentRouter = require('./routes/rentCarRouter');
const PartCarRouter = require('./routes/partCarRouter');
const designCarModel = require('./routes/designCarModel ');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/rent', rentRouter)
app.use('/part', PartCarRouter)
app.use('/design', designCarModel )


module.exports = app;
