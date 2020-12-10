const Koa = require('koa')
const app = new Koa()
const route = require('koa-route') // 引入路由

const main = ((ctx, next) => {
  ctx.body = 'hello'
})

app.use(route.get('/abc', main))

app.listen(3000)