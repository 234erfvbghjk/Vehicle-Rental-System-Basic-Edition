const express = require('express')
const router = express.Router()
const User = require('../../models/usersModel')

router.post('/', async (req, res) => {
  const { username, password } = req.body
 await User.create({
    username, password
  })
})

module.exports = router