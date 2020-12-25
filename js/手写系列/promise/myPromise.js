const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'

function MyPromise(fn) {
  const that = this // 保存this作用域
  that.state = PENDING  // 将此时的状态设为等待pending
  that.value = null // 存放公共变量
  that.resolvedCallbacks = [] // 存放resolved的回调函数
  that.rejectedCallbacks = [] // 存放rejected的回调函数
  try { // 当之前代码正确执行时，执行fn
    fn(resolve, reject)
  } catch (error) { // 抛出错误
    reject(error)
  }
}

function resolve(value) {
  if (that.state === PENDING) { // 确保当前状态为pending
    that.state = RESOLVED // 将状态设为resolved
    that.value = value // 将变量存放至公共区域
    that.resolvedCallbacks.map(cb => { // 遍历resolved的回调函数
      cb(that.value) // 将函数存入数组中
    })
  }
}

function reject(value) {
  if (that.state === PENDING) { // 确保当前状态为pending
    that.state = REJECTED // 将状态设为rejected
    that.value = value // 将变量存放至公共区域
    that.rejectedCallbacks.map(cb => { // 遍历rejected的回调函数
      cb(that.value) // 将函数存入数组中
    })
  }
}