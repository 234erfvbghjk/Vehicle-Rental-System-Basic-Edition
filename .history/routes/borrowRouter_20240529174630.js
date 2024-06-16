const express = require('express');
const router = express.Router();
const borrow = require('../models/borrowModel');

router.post('/', async (req, res) => {
  const user = await Car.create(req.body);
  res.json(user);
});

router.get('/', async (req, res) => {
  const rows = await Car.findAll()
  res.json(rows)
})


module.exports = router