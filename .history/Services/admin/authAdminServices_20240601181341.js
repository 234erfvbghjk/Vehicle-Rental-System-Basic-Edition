const user = require('../../models/usersModel')

const AuthAdminService = {
  // 这里面写的就是创建的增删改查的协议

  // 注册
  async create(params) {
    const row = await user.create(params)
    return row
  },
  async check(username) {
    const res = await user.findOne({
      where: {
        username
      }
    })
    return !res
  },

  // 登录
  async login(params) {
    const row = await user.findOne({
      where: params
    })
    
  }
}

module.exports = AuthAdminService