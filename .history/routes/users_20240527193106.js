var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {

});

router.post('/', async (req, res) => {
  try {
      const user = await User.create(req.body);
      res.json(user);
  } catch (error) {
      res.status(400).json({ error: error.message });
  }
});

module.exports = router;
