const express = require('express')
const router = express.Router()
const authAdminRouter = require('./authAdminRouter')


// auth 登录相关的意思
router.use('/auth', authAdminRouter)

module.exports = router