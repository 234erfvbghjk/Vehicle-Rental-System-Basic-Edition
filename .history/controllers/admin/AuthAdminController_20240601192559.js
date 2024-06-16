const AuthAdminService = require('../../services/admin/AuthAdminService')

const AuthAdminController = {
  // C
  register:as function (req, res) {
    if (!req.body.username || !req.body.password) {
      res.json({
        code: -1,
        msg: '请输入正确的账号和密码'
      })
    }
    AuthAdminService.create(req.body)
  }
  // R
  // U
  // D
}

module.exports = AuthAdminController