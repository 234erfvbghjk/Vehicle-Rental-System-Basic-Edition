const express = require('express')
const router = express.Router()
const User = require('../../models/usersModel')

router.post('/', (req, res) => {
  const { username, password } = req.body
  User.create({
    username, password
  })
})

module.exports = router