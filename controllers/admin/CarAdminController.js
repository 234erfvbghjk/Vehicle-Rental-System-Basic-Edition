const CarAdminService = require('../../Services/admin/CarAdminService')

const CarAdminController = {
    create:async (req,res)=> {
        const file = req.file ? req.file : ""
        req.body.img= file.path.substring(6)
        const row = await CarAdminService.create(req.body)
        res.json(row)
    },
    findAll:async (req,res)=>{
        const row = await CarAdminService.findAll()
        res.json(row)
    },
    update:async (req,res)=>{
        const {id}= req.params
        const {CarName,CarPrice} = req.body
        const result =  await CarAdminService.update({id,CarName,CarPrice})
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
    delete:async (req,res)=>{
        const {id}= req.params
        const result =  await CarAdminService.delete({id})
        if(!result){
            res.json({
                code:-1,
                msg:"删除失败"
            })
        }
        res.json({
            code:1,
            msg:"删除成功"
        })
    }
}

module.exports=CarAdminController