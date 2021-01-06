// vue3.0 响应式原理
// 2.0 默认递归，数组改变length属性不会触发视图更新，对象不存在的属性无法被拦截
function isObject(val) {
  return typeof val === 'object' && val !== null
}


function reactive(target) {
  // 创建响应式对象
  return createReactiveObject(target)
}

function createReactiveObject(target) {
  if (!isObject(target)) { // 如果不是对象，就直接返回
    return target
  }
  let baseHandler = {
    get(target, key, receiver) {
      console.log('获取');
      let res = Reflect.get(target, key)
      return isObject(res) ? reactive(res) : res  // 递归多层代理
    },
    set(target, key, value, receiver) {
      let hadkey = target.hasOwnProperty(key)
      let oldValue = target[key]
      if (!hadkey) {
        console.log('新增');

      } else if (oldValue !== value) {
        console.log('修改');
      }
      let res = Reflect.set(target, key, value, receiver);
      return res
    },
    deleteProperty(target, key) {
      console.log('删除');
      let res = Reflect.deleteProperty(target, key)
      return res
    }
  }
  let observed = new Proxy(target, baseHandler)
  return observed
}

let proxy = reactive({
  name: 'wn',
  age: {
    n: 18
  }
})
// proxy.age
// proxy.name
// proxy.name = 'cz'
// delete proxy.name
// console.log(proxy.name);
proxy.sex = 'male'
console.log(proxy.sex);