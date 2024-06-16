const express = require('express')
const router = express.Router()
// const User = require('../../models/usersModel')
const AuthAdminService = require('../../Services/admin/authAdminServices')

router.post('/', async (req, res) => {
  const { username, password } = req.body
  const row = await AuthAdminService.create(req.body)
  res.json(row)
})

// 判断一个用户是否存在

router.get('/', async (req, res) => {
  const { username } = req.query
  // check方法时自创的一个方法 需要在Services中创建
  const result = await AuthAdminService.check(username)
  if (result) {
    res.json({ code: 1, msg: '此账号可以使用' })
  } else {
    res.json({ code: -1, msg: '此账号不可使用' })
  }
})


// 登录接口
router.post('/login', async (req, res) => {
  const { username, password }

module.exports = router