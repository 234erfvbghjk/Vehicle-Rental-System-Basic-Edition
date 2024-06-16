var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {

});

router.post('/', async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
  res.status(400).json({ error: error.message });
});

module.exports = router;
