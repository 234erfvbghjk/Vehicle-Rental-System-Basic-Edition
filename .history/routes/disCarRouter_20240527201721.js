var express = require('express');
var router = express.Router();
const DisCar = require('../models/disCarModel');

router.get('/disCar', async (req, res) => {
  const disCar = await DisCar.findAll();
  res.send(disCar);
})

