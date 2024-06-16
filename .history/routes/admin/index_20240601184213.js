const express = require('express')
const router = express.Router()
const authAdmin = require('./authAdminRouter')


// auth 登录相关的意思
router.use('/auth', auth)

module.exports = router