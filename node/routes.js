const { app, router } = require('./index')
const cookieParser=require("cookie-parser")
// 引入jwt token工具

app.use(cookieParser())
// token在 req.cookies 中

const JwtUtil = require('./utils/jwt');

const whiteList = ['/api/login']// no redirect whitelist

app.use(function (req, res, next) {
  // 我这里知识把登陆和注册请求去掉了，其他的多有请求都需要进行token校验 
  if (whiteList.indexOf(req._parsedUrl.pathname) === -1) {
    let token = req.cookies.token
    let jwt = new JwtUtil(token);
    let result = jwt.verifyToken();
    // 如果考验通过就next，否则就返回登陆信息不正确
    if (result == 'err') {
      res.send({ code: 403, msg: '登录已过期,请重新登录' });
    } else {
      req.userId = Number(result)
      next();
    }
  } else {
    next();
  }
});


require('./module/login')
require('./module/postList')


module.exports = router