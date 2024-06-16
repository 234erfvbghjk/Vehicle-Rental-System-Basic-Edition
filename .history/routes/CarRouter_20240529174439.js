const express = require('express');
const router = express.Router();
const Car = require('../models/CarModel');

router.post('/', async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
});

router.get('/', async (req, res) => {
  const rows = await User.findAll()
  res.json(rows)
})


module.exports = router