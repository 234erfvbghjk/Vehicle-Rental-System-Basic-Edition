const { log } = require('debug/src/browser');
var express = require('express');
var router = express.Router();
const Rent = require('../models/rentModel');

/* GET users listing. */
router.get('/', async function (req, res, next) {
  const row = await Rent.findAll();
  res.json(row)
});

router.post('/', async (req, res) => {
  const user = await Rent.create(req.body);
  res.json(user);
});

module.exports = router;
