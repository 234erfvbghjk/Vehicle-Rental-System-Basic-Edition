var express = require('express');
var router = express.Router();
const Car = require('../../models/CarModel');
// 导入对应的表
const partCar = require('../../models/partCarModel');
const { route } = require("express/lib/router");


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
router.put("")


// delete


module.exports = router;