const mysql = require('mysql')
const config = require('./defaultConfig')
const util = require('./utils')
// 连接线程池
let pool = mysql.createPool({
  host: config.dataBase.HOST,
  user: config.dataBase.USERNAME,
  password: config.dataBase.PASSWORD,
  database: config.dataBase.DATABASE,
  port: config.dataBase.PORT
})

let allServices = {
  query: function (sql, values) {
    return new Promise((resolve, reject) => {
      pool.getConnection(function (err, connection) {
        if (err) {
          reject(err)
        } else {
          connection.query(sql, values, (err, rows) => {
            if (err) {
              reject(err)
            } else {
              resolve(rows)
            }
            connection.release()
          })
        }
      })
    })
  }
}

// 用户登录
let userLogin = function (username, userpwd) {
  let _sql = `select * from users where username="${username}" and userpwd="${userpwd}";`
  return allServices.query(_sql)
}

// 查找用户
let findUser = function (username) {
  let _sql = `select * from users where username="${username}";`
  return allServices.query(_sql)
}

// 注册用户
let insertUser = function (value) {
  let _sql = `insert into users set username=?,userpwd=?,nickname=?;`
  return allServices.query(_sql, value)
}

// 根据分类查找对应的文章列表
let findNoteListByType = function (note_type) {
  let _sql = `select * from note where note_type="${note_type}";`
  return allServices.query(_sql)
}

// 根据文章id查找对应文章
let findNoteById = function (note_id) {
  let _sql = `select * from note where id="${note_id}";`
  return allServices.query(_sql)
}

// 发布文章
let insertNewNote = function (value) {
  let time = util.nowDate()
  let _sql = `insert into note set useId=?,title=?,note_type=?,note_content=?,head_img=?,c_time=${time},m_time=${time},nickname=?;`
  return allServices.query(_sql, value)
}
module.exports = {
  userLogin,
  findUser,
  insertUser,
  findNoteListByType,
  findNoteById,
  insertNewNote
}