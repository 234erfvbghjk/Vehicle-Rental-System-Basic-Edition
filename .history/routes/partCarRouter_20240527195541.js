const { log } = require('debug/src/browser');
var express = require('express');
var router = express.Router();
const RartCar = require('../models/partCarModel');

/* GET users listing. */
router.get('/', async function (req, res, next) {
  const row = await User.findAll();
  res.json(row)
});

router.post('/', async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
});

module.exports = router;
