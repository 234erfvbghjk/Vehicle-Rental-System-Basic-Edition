const AuthAdminService = require('../../services/admin/AuthAdminService')

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
    const confirmUsername = "admin"
    const confirmPassword = "123456"
    if (username !== confirmUsername || password !== confirmPassword) {
      res.json({
        code: -1, msg: "用户名或密码错误"
      })
    }
    // 登录成功
  }
  // R
  // U
  // D
}

module.exports = AuthAdminController