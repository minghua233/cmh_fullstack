// 数据库驱动 
const mongoose = require('mongoose');
// 将数据库的物理存储转变为一个json对象
// Schema帮我们创建类，给我们API
// 只要看到Schema你就看到了表结构
const Schema = mongoose.Schema
const articleSchema = new Schema({
  title: String,
  date: Date,
  content: String
})
const linkSchema = new Schema({
  name: String,
  herf: String,
  newPage: Boolean
})
const userSchema = new Schema({
  name: String,
  password: String,
  email: String,
  emailCode: String,
  creatTime: Number,
  articles: [articleSchema],
  links: [linkSchema]
})

const User = mongoose.model('User', userSchema)

new User({
  name: 'tmp',
  password: '0000',
  email: 'lizun@163.com',
  emailCode: '12345',
  creatTime: Date.now(),
  articles: [],
  links: []
}).save(function () {

})

mongoose.connect('mongodb://127.0.0.1:27017/test');
const db = mongoose.connection;
db.on('error', function () {
  console.log('db error')
})
db.once('open', function () {
  console.log('db opened');
})