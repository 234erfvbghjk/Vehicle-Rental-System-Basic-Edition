var express = require('express');
var router = express.Router();

const adminRouter = require('./admin/')

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
// // router.get("/users",(req,res)=>{
// //   res.json({id:1010,name:"张三"})
// // })

router.use('/admin', adminRouter)


module.exports = router;
