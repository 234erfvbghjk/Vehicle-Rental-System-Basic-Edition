
const user = require('../../models/usersModel')

const UserApiService = {
    // 这里面写的就是创建的增删改查的协议

    // 注册
    async create(params) {
        const row = await user.create(params)
        return row
    },

    // query: async (username) => {
    //  const result =  await user.findOne({where:{ username }})
    //  return result
    // },
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
            where: {
                username: params.username,
            }
        })
        if (row) {
            if (row.username === params.username) {
                return row
            } else {
                return false
            }

        }
    },
    update:async ({id})=> {
        const row = await user.update( {where: {userId: id}})
        return row
    },
}

module.exports = UserApiService