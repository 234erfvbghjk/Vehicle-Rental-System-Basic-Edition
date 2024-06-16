var express = require('express');
var router = express.Router();
const Car = require('../../models/CarModel');
// 导入对应的表
const partCar = require('../../models/partCarModel');


router.get('/', async (req, res) => {
  // findBuPk("对几个表“，对象{include:对象模型})
  const Cars = await partCar.findByPk(1, {
    include: Car
  });
  res.send(Cars);
})

router.post('/', async (req, res) => {
  const Car = await Car.create(req.body);
  res.send(Car);
})
// resful
// put
// 获取它的id修改

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const NewCar = {
    CID: "2",
    CarName: "宝马BMW2019",
    CarPrice: 100,
    CarColor: "白色"
  }
  
  const CarNew = await Car.update(NewCar, { where: { id } })
  res.send(CarNew);
})


// delete


module.exports = router;