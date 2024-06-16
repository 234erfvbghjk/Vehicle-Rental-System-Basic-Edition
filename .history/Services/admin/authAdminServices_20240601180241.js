const user = require('../../models/usersModel')

const AuthAdminService = {
  // 这里面写的就是创建的增删改查的协议

  // 注册
  async create(params) {
    const row = await user.create(params)
    return row
  }
  async 
}

module.exports = AuthAdminService