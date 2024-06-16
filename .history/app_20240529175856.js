const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const UserRouter = require('./routes/admin/usersAdminRouter')
const CarRouter = require('./routes/CarRouter')
const borrowRouter = require('./routes/borrowRouter')
const categoryRouter = require("./routes/categoryRouter")

let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/admin/users', UserRouter);
app.use('/car', CarRouter);
app.use('/borrow', borrowRouter);
app.use('/category', categoryRouter);



module.exports = app;
