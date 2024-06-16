const express = require('express')
const router = express.Router()

router.post('/',()=>{
  console.log('post')
})

module.exports = router