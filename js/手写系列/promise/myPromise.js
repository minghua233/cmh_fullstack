// promise中的三种状态 pending resolved rejected
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
// 实现resolve
function resolve(value) {
  if (that.state === PENDING) { // 确保当前状态为pending
    that.state = RESOLVED // 将状态设为resolved
    that.value = value // 将变量存放至公共区域
    that.resolvedCallbacks.map(cb => { // 遍历resolved的回调函数
      cb(that.value) // 调用resolvedCallbacks中存在的回调函数
    })
  }
}
// 实现reject
function reject(value) {
  if (that.state === PENDING) { // 确保当前状态为pending
    that.state = REJECTED // 将状态设为rejected
    that.value = value // 将变量存放至公共区域
    that.rejectedCallbacks.map(cb => { // 遍历rejected的回调函数
      cb(that.value) // 调用rejectedCallbacks中存在的回调函数
    })
  }
}
// 实现.then()
MyPromise.prototype.then = function (onFulfilled, onRejected) {
  const that = this // 保存this作用域
  // 判断传入的onFulfilled是否为函数，若不是则将onFulfilled转换为函数形
  onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v
  // 判断传入的onFulfilled是否为函数，若不是则抛出错误
  onRejected = typeof onRejected === 'function' ? onRejected : v => { throw r }
  if (that.state === PENDING) { // 判断当前状态是否为pending
    that.resolvedCallbacks.push(onFulfilled) // 将传入的函数存入resolved回调函数数组中
  }
  if (that.state === RESOLVED) { // 若当前状态为resolved，即跟在上一个.then()之后
    onFulfilled(that.value) // 直接执行传入的onFulfilled函数，并取得上一个.then() resolve出的参数
  }
  if (that.state === RESOLVED) { // 若当前状态为rejected，即跟在上一个.then()之后
    onRejected(that.value) // 直接执行传入的onRejected函数，并取得上一个.then() resolve出的参数
  }
}