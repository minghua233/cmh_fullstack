const Koa = require('koa')
const path = require('path')
const config = require('./config/default')
const session = require('koa-session-minimal')
const views = require('koa-views')
const app = new Koa()
// const main = (ctx) => {
//   ctx.response.body = 'Hello world'
// }

// session 存储配置
const sessionMysqlConfig = {

}

// 配置服务端的模板引擎中间件
app.use(views(path.join(__dirname, './views'), {
  extension: 'ejs'
}))

app.use(require('./routers/signin').routes())

app.listen(config.port, () => {
  console.log('项目启动成功');
})
