const express = require('express')
const router = express.Router()
const auth = require('./auth')


// auth 登录相关的意思
router.use('/auth', userRouter)

module.exports = router