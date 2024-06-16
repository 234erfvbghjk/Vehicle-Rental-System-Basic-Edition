const express = require('express');
const router = express.Router();
const Car = require('../../models/CarModel');

router.post('/', async (req, res) => {
  const user = await Car.create(req.body);
  res.json(user);
});

router.get('/', async (req, res) => {
  const rows = await Car.findAll()
  res.json(rows)
})

router.put('/:id', async (req, res) => {
  const { id } = req.par
  const rows = await Car.update(Car, { where: { id } })
  if (!rows) {
    res.json({
      code: 1,
      msg: '修改失败'
    })
  }
  res.json({
    code: 1,
    msg: '修改成功'
  })


})

// router.delete('/', async (req, res) => {
//   const rows = await Car.delete(req.body)
//   res.json(rows)
// })


module.exports = router