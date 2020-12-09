// 迎接接口请求吧
// Manufacturer　有多少商家
// MVC　ａｐｉ　向外暴露数据
// 一切皆资源
// 1. 设计一个URL　ＲＳＴＦＵＬ
// /api/v1/manufacturer GET [{name: '小米'}]
// /api/v1/manufacturer POST body {} 
const express = require('express')
const router = express.Router()
const manufacturerController = require('../../controllers/manufacturer')
// url  访问的路口 MVC
router.get('/manufacturers', manufacturerController.all)
router.get('/manufacturers/:id', manufacturerController.byId)
router.get('/manufacturers', (req, res) => {
  res.json({
    'data': '1'
  })
})
router.post('/manufacturers', manufacturerController.create)
module.exports = router