const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const UserRouter = require('.//userRouter');
const CarRouter = require('.//carRouter');
const borrowRouter = require('.//borrowRouter');
const categoryRouter = require('.//categoryRouter');

let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/user', UserRouter);
app.use('/car', CarRouter);
app.use('/borrow', borrowRouter);
app.use('/category', categoryRouter);



module.exports = app;
