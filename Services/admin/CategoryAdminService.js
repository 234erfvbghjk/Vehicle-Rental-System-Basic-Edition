const Category = require('../../models/categoryModel')

const CategoryAdminService = {
    create:async (name)=>{
     const row=  await Category.create({name})
        return row
    },
    findAll:async ()=> {
        const row = await Category.findAll()
        return row
    },
    update:async ({id,name,sort})=> {
        const row = await Category.update({name, sort}, {where: {cid: id}})
        return row
    },
    delete:async ({id})=>{
        const row= await Category.destroy({where:{cid:id}})
        return row
    }
}

module.exports=CategoryAdminService