let Koa = require('koa')
let app = new Koa()

// koa 可以使用 async await
let log = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('ok');
      resolve()
    }, 1000)
  })
}
// 这些中间件会形成一个promise，关系是最外层
app.use(async (ctx, next) => { // 1
  console.log(1);
  await next() // 等待下一个中间件执行完毕后再继续next
  console.log(2);
})
app.use(async (ctx, next) => { // 2
  console.log(3);
  await log() // 调用 await 就会等待执行完毕后继续执行
  await next()
  console.log(4);
})
app.use((ctx, next) => { // 3
  console.log(5);
  next()
  console.log(6);
})

app.listen(3001)