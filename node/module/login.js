const { conn, app, router } = require('../index')
const { resData } = require('../utils/resData')
// 引入jwt token工具
const JwtUtil = require('../utils/jwt');

router.get('/api/login', (req, res) => {
  console.log('login');
  conn.query('select * from login', (e, r) => {
    let user = r.filter(item => {
      return item.userName === req.query.userName
    })
    if (user.length === 0) {
      res.json(resData([], 'FAIL', '账号错误'))
      return false
    }
    if (req.query.password === user[0].password) {
      // 登陆成功，添加token验证
      let _id = user[0].id.toString();
      // 将用户id传入并生成token
      let jwt = new JwtUtil(_id);
      let token = jwt.generateToken();
      // 将 token 返回给客户端
      res.send({ code: 200, msg: '登陆成功', token: token });
      // res.json(resData([], 'SUCCESS'))
    } else {
      res.json(resData([], 'FAIL', '密码错误'))
    }
  })
})
module.exports = router


// router.post('/login', (req, res) => {
//   const userName = req.query.userName;
//   const pass = req.query.password;
//   new Promise((resolve, reject) => {
//     // 根据用户名查询用户
//     console.log(users);
//     users.findOne({ 'username': userName }).exec((err, result) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(result);
//       }
//     });
//   }).then((result) => {
//     console.log(result);
//     if (result) {
//       // 密码解密 利用aes
//       var aes = new AesUtil(result.password);
//       var password = aes.deCryto();
//       if (pass == password) {
//         // 登陆成功，添加token验证
//         let _id = result._id.toString();
//         // 将用户id传入并生成token
//         let jwt = new JwtUtil(_id);
//         let token = jwt.generateToken();
//         // 将 token 返回给客户端
//         res.send({ status: 200, msg: '登陆成功', token: token });
//       } else {
//         res.send({ status: 400, msg: '账号密码错误' });
//       }
//     } else {
//       res.send({ status: 404, msg: '账号不存在' })
//     }
//   }).catch((err) => {
//     console.log(err);
//     res.send({ status: 500, msg: '账号密码错误' });
//   })
// });

// module.exports = router