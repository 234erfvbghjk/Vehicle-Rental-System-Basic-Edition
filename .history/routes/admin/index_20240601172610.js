const express = require('express')
const router = express.Router()
const userRouter = require('./usersAdminRouter')

router.use('/auth', userRouter)

module.exports = router