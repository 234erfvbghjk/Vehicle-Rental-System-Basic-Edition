
var express = require('express');
var router = express.Router();
const PartCar = require('../models/partCarModel');

/* GET users listing. */
router.get('/', async function (req, res, next) {
  const row = await PartCar.findAll();
  res.json(row)
});

router.post('/', async (req, res) => {
  const Car = await PartCar.create(req.body);
  res.json(PartCar);
});

module.exports = router;
