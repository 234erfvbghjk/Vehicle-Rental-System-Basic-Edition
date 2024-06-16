const UserApiService = require('../../Services/api/UserApiService')
const jwt = require('jsonwebtoken')
const { secret, expiresIn } = require('../../config/config')
const CarAdminService = require("../../Services/admin/CarAdminService");

const UserApiController = {
    // C
    register: async function (req, res) {
        if (!req.body.username || !req.body.password) {
            res.json({
                code: -1,
                msg: '请输入完整的信息'
            })
        }
        const result = await UserApiService.create(req.body)
        res.json(result)
    },

    login: async function (req, res) {
        const { username, password } = req.body
        const user = await UserApiService.login({ username, password }) // 使用 AuthAdminService.login 而不是 query
        if (!user || username !== user.username || password !== user.password ) {
            res.json({
                code: -1, msg: "用户名或密码错误"
            })
            return
        }
        const token = jwt.sign({ username }, secret, { expiresIn}) // 确保 expiresIn 是字符串，并加上单位（如 's' 表示秒）
        res.json({
            code: 1, msg: "登录成功", token
        })
    },

    update:async (req,res)=>{
        const {id}= req.params
        const result =  await CarAdminService.update({id})
        if(!result){
            res.json({
                code:-1,
                msg:"修改失败"
            })
        }
        res.json({
            code:1,
            msg:"修改成功"
        })
    },

// 修改信息


}

module.exports = UserApiController