// const { log } = require('debug/src/browser');
var express = require('express');
var router = express.Router();
const Rent = require('../models/rentCarModel');

/* GET users listing. */
router.get('/', async function (req, res, next) {
  const row = await Rent.findAll();
  res.json(row)
});

router.post('/', async (req, res) => {
  const rows = await Rent.create(req.body);
  res.json(rows);
});

module.exports = router;
