const AuthAdminService = require('../../services/admin/AuthAdminService')
const jwt = require('jsonwebtoken')
const { secret, expiresIn } = require('../../config/config')

const AuthAdminController = {
  // C
  register: async function (req, res) {
    if (!req.body.username || !req.body.password) {
      res.json({
        code: -1,
        msg: '请输入正确的账号和密码'
      })
    }
    const result = await AuthAdminService.create(req.body)
    res.json(result)
  },

  login: async function (req, res) {
    const { username, password } = req.body
    // 验证用户名和密码
    // const confirmUsername = "admin"
    // const confirmPassword = "123456"
    const User = await AuthAdminService.query({ username })
    if (username !== User.username || password !== confirmPassword) {
      res.json({
        code: -1, msg: "用户名或密码错误"
      })
    }
    // jwt.sign("第一个值跟的是要加密的内容", "第二个值是密钥"，{ 过期时间 })
    const token = jwt.sign({ username }, secret, { expiresIn })
    // 登录成功
    res.json({
      code: 1, msg: "登录成功", token
    })
  }
  // R
  // U
  // D
}

module.exports = AuthAdminController