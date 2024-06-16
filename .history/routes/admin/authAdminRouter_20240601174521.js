const express = require('express')
const router = express.Router()
// const User = require('../../models/usersModel')
const AuthAdminService = require('../../services/admin/AuthAdminService')

router.post('/', async (req, res) => {
  const { username, password } = req.body
  const row = await AuthAdminService.create(req.body)
  res.json(row)
})

// 判断一个用户是否存在

router.get('/', (req, res) => {
  const { username, password } = req.query
  console.log(username, password));
})

module.exports = router