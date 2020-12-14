const router = require('koa-router')()
const controller = require('../controller/c-signin')

router.post('/signin', (ctx) => {
  // 展示登录页面
  ctx.body = controller.postSignin()
})

module.exports = router