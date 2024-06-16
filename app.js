const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');


let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// 设置静态资源的一个地址
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);




module.exports = app;
