const exress =require('express')
const router = exress.Router()


const BorrowApiController = require('../../controllers/api/BorrowApiController')

/**
 * url : http://127.0.0.1:3000/api/cars
 */
router.get('/',BorrowApiController.findAll)
router.put('/:id',BorrowApiController.update)


module.exports=router

