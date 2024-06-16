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
// result
// put
// 获取它的id修改
router.put('/:id', async (req, res) => {
  const { CarId } = req.params;
  // const car = req.body
  // // update("第一个参数写的是上面声明的值"，"第二个值时条件{}   ")
  // const id = await Car.update(car, { where: { CarId } })
  // if (!id) {
  //   res.json({ code: 0, msg: "修改失败" })
  //   console.log("失败");
  // }
  // res.json({ code: 1, msg: "修改成功" })
  const rows
})

// delete


module.exports = router;