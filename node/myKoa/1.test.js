let Koa = require('./koa/application')
let app = new Koa()

app.use((req, res) => {
  res.end('hello wn')
})

app.listen(3000)