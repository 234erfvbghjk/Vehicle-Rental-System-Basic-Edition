var express = require('express');
var router = express.Router();

const adminRouter = require('./admin/index')

router.use('/admin', adminRouter)


module.exports = router;
