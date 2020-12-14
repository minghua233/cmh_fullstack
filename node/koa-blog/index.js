const Koa = require('koa')
const config = require('./config/default')

const app = new Koa()
// const main = (ctx) => {
//   ctx.response.body = 'Hello world'
// }

app.use(require('./routers/signin').routes())

app.listen(config.port, () => {
  console.log('项目启动成功');
})
