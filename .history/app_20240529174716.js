const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const User = require('./models/userRouter');
const Car = require('./models/carRouter');
const borrow = require('./models/borrowRouter');
const category = require('./models/categoryRouter');

let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/user', User);
app.use('/car', Car);
app.use('/borrow', borrow);
app.use('/category', category);



module.exports = app;
