const { log } = require('debug/src/browser');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', as function (req, res, next) {
  const row = 
  res.json()
});

router.post('/', async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
  log("同步成功");
});

module.exports = router;
