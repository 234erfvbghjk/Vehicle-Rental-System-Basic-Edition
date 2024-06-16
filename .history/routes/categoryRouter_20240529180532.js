const express = require('express');
const router = express.Router();
const category = require('./')

router.post('/', async (req, res) => {
  const user = await category.create(req.body);
  res.json(user);
});

router.get('/', async (req, res) => {
  const rows = await category.findAll()
  res.json(rows)
})


module.exports = category