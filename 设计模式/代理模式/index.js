// 客户端 ---》 DNS ---》 代理服务器  ---》 目标服务器

// Proxy

// const proxy = new Proxy(obj, handler)

// 礼物
const present = {
  type: '巧克力',
  value: 60
}

// 未知女生
const girl = {
  name: '小美',
  aboutMe: '...',
  age: 22,
  career: 'teacher',
  fakeAvatar: 'xxxx',
  avatar: 'xxxx',
  phone: 123456,
  present: [],
  bottomValue: 50,
  lastPresent: present
}

// 普通信息
const baseInfo = ['age', 'career']

// 私密信息
const privateInfo = ['avatar', 'phone']

// 小敏
const user = {
  // ...
  isValidated: true,
  isVip: false
}

const lmLovers = new Proxy(girl, {
  get: function (girl, key) {
    if (baseInfo.indexOf(key) !== -1 && !user.isValidated) {
      alert('您还没有完成认证哦')
      return
    }

    // 校验。。。

    if (user.isValidated && privateInfo.indexOf(key) && !user.isValidated) {
      alert('只有vip才可以查看信息')
      return
    }
  },

  set: function (girl, key, val) {
    if (key === 'lastPresent') {
      if (val.value < girl.bottomValue) {
        alert("sorry，您的礼物被拒收了")
        return
      }

      girl.lastPresent = val
      girl.present = [...girl.present, val]
    }
  }
})