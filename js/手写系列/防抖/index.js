// 在一定时间内，如果持续请求，就一直不执行，在规定时间内没有第二次操作，才执行
function debounce(fn, delay) {
  let timer = null // 未被垃圾回收机制回收的变量，不会执行该赋值语句

  return function () { // 通过闭包保存上一次作用域
    let arg = arguments,
      context = this // 获得调用函数内部的this
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(context, arg) // 保证this不被更改
    }, delay);
  }
}