const express = require('express')
const router = express.Router()
const User = require('../../models/usersModel')

router.post('/', async (req, res) => {
  const { username, password } = req.body
  const row = await User.create({
    username, password
  })
  res.json(row)
})

module.exports = router