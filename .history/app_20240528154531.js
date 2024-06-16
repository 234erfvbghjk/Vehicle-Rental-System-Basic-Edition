const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/admin/usersRouter');
const rentRouter = require('./routes/rentCarRouter');
const PartCarRouter = require('./routes/partCarRouter');
const CarRouter = require('./routes/admin/CarRouter');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/admin/users', usersRouter);
app.use('/rent', rentRouter)
app.use('/part', PartCarRouter)
app.use('/admin/car', CarRouter)


module.exports = app;
