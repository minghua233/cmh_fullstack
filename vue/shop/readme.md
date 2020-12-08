# 全栈目录结构
  - 前台 vue
   - 用户端 vue
   - 管理后台 react + antd
  - API后端 服务器端 node + Java

vue create ---frontend 前端 8080
express ---backend 后端 3000
mongodb 27017

前端 生命周期 mounted
axios
-> API 向后端进行通信
http://http://localhost:8080 -> :3000 跨域

- 后端接口先调通
  localhost:3000/users/:cmh
  {
    name: 'cmh',
    sex: '男'
  }
  ^/api/v1/users/:cmh
  1. url 响应 /api/
   加路由 /api/v1/
   app.use(启用路由)
  2. 返回json
  3. postman 模拟请求
  4. 前端请求
  5. 不只是域名不一样，端口和协议不一样都算跨域
  6. App.all 后端配置解决的

- 基于mongodb 数据流 -> MVC node(express) -> Vue 界面