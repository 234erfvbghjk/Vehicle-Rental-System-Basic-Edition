const AuthAdminService = require('../../services/admin/AuthAdminService')

const AuthAdminController = {
  // C
  register: function (req, res) {
    if (req.body.username && req.body.password) {

    }
    AuthAdminService.register(req, res)
  }
  // R
  // U
  // D
}

module.exports = AuthAdminController