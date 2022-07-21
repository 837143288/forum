const { app } = require('./index')
const routes = require('./routes')
//cookie-session是express的一个中间件,需要导入使用
let cookieSession = require("cookie-session")


app.all('*', function (req, res, next) {
  next()
})

app.use('/', routes)

app.listen(4000, () => console.log('running'))