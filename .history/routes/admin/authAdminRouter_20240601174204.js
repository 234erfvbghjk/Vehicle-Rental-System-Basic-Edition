const express = require('express')
const router = express.Router()
// const User = require('../../models/usersModel')
const AuthAdminService = require('../../services/AuthAdminService')

router.post('/', async (req, res) => {
  const { username, password } = req.body
 , password
  // })
  res.json(row)
})

module.exports = router