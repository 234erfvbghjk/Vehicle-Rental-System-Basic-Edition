const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
// 导入控制台
const AuthAdminController = require('../../controllers/')
// CRUD增删改查

// 注册模块
// router.post('/register',控制台.方法)
router.post('/register', AuthAdminController.register)
// 登录模块
// router.post('/login', AuthAdminController.login)






module.exports = router