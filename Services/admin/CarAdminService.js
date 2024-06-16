const Car = require('../../models/CarModel')

const CarAdminService = {
    create:async (params)=>{
       return  await Car.create(params)
    },
    findAll:async ()=> {
        const row = await Car.findAll()
        return row
    },
    update:async ({id,CarName,CarPrice})=> {
        const row = await Car.update({CarName, CarPrice}, {where: {CarId: id}})
        return row
    },
    delete:async ({id})=>{
        const row= await Car.destroy({where:{CarId:id}})
        return row
    }
}

module.exports=CarAdminService