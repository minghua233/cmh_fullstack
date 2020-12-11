const Koa = require('koa')
const cors = require('koa2-cors')
const bodyParser = require('koa-bodyparser')
const user_router = require('./routes/api/user_router')

const app = new Koa()

app.use(cors()) // 解决跨域
app.use(bodyParser()) // 帮助koa解析参数
app.use(user_router.routes())

app.listen(3000)