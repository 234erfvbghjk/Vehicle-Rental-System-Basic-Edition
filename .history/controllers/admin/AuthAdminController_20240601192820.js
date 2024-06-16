const AuthAdminService = require('../../services/admin/AuthAdminService')

const AuthAdminController = {
  // C
  /**
   * url:/admin/auth/register 
   */
  register: async function (req, res) {
    if (!req.body.username || !req.body.password) {
      res.json({
        code: -1,
        msg: '请输入正确的账号和密码'
      })
    }
    const result = await AuthAdminService.create(req.body)
    res.json(result)
  }
  // R
  // U
  // D
}

module.exports = AuthAdminController