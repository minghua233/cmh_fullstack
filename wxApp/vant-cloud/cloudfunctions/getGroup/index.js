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
  let groupList = await db.collection('user-group').where({ // 返回 { data: [] }
    userId: openId
  }).get()
  let returnResult = []
    const oneGroup = await db.collection('group').where({
      _id: item.groupId,
      deleted: false
    }).get()
    if (oneGroup.data.length > 0) {
      const userInfo = await db.collection('user').where({
        openId: oneGroup.data[0].createBy
      }).get()
      oneGroup.data[0].createBy = userInfo.data[0]
      oneGroup.data[0].relateUserGroupId = item._id
      returnResult.push(oneGroup.data[0])
    }
  }
  return returnResult.sort((a, b) => a.createTime < b.createTime ? 1 : -1)
}