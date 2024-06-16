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
// restful
// put
// 获取它的id修改

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const NewCar = req.body
  const CarNew = await Car.update(NewCar, { where: { id } })
  if (!id) {
    res.json({
      code: 0,
      msg: '没有id'
    })
  }
  res.json({
    code: 1,
    msg: "修改成功"
  })
})


// delete
router.dele


module.exports = router;