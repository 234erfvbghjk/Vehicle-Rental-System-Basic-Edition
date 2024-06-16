const express = require('express')
const router = express.Router()
const User = require('../../models/usersModel')

router.post('/', (req, res) => {
  const { username, password } = req.body
User.c
})

module.exports = router