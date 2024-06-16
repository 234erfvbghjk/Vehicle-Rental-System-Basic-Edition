const AuthAdminController = {
  // C
  register: function (req, res) {
    res.json(req.body)
if(req.body){
  res.json({
    code: 200,
    msg: '注册成功'
  })
}
  }
  // R
  // U
  // D
}

module.exports = AuthAdminController