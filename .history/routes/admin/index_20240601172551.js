const express = require('express')
const router = express.Router()
const userRouter = require('./usersAdminRouter')

router.use('/users', userRouter)

