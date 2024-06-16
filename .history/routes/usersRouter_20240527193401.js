const { log } = require('debug/src/browser');
var express = require('express');
var router = express.Router();
const User = require('../models/userModel');

/* GET users listing. */
router.get('/', async function (req, res, next) {
  const row = await User.findAll();
  res.json()
});

router.post('/', async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
});

module.exports = router;
