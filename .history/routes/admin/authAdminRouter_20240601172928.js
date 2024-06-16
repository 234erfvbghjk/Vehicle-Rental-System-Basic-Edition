const express = require('express')
const router = express.Router()
const User = require('../../models/')

router.post('/', (req, res) => {
  const { username, password } = req.body

})

module.exports = router