const express = require('express')
const router = express.Router()
const userRouter = require('./')


// auth 登录相关的意思
router.use('/auth', userRouter)

module.exports = router