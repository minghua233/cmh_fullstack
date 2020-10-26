// 云函数入口文件
const cloud = require('wx-server-sdk')
const env = 'cmh-5gebbyey0b914c53'

cloud.init()
const db = cloud.database({
  env
}) // 指明云函数生效的环境

// 云函数入口函数
exports.main = async (event, context) => {
  // const openId = event.userInfo.openId
  const openId = cloud.getWXContext().OPENID
  // 查找user-group这个库里是否有这个openId // 查找数据where() .get()
  // 按照这个openId把user-group里的数据取出
  // 去group这个库里面查找所有_id和groupId相同的数据
  
}