// 云函数入口文件
const cloud = require('wx-server-sdk')
const env = 'cmh-5gebbyey0b914c53'

cloud.init()
const db = cloud.database({
  env
}) // 指明云函数生效的环境

// 云函数入口函数
exports.main = async (event, context) => {
  const userInfo = event.userInfo

  // 查看user库中有没有这个openId
  const checkUser = await db.collection('user').where({
    openId: userInfo.openId
  }).get()
  // 已经存在该用户,更新用户信息
  if (checkUser.data.length > 0) {
    await db.collection('user').doc(checkUser.data[0]._id).update({ //获取当前数据
      data: {
        avatarUrl: event.avatarUrl,
        nickName: event.nickName,
        sex: event.sex
      }
    })
  } else {
    const insertResult = await db.collection('user').add({
      data: {
        avatarUrl: event.avatarUrl,
        nickName: event.nickName,
        sex: event.sex,
        name: '',
        openId: event.userInfo.openId,
        createTime: new Date()
      }
    })
  }
}