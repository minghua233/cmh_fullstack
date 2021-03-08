function debounce(fn) {
  // 保存上一个定时器
  let timeout = null
  return function () {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      fn.apply(this, arguments)
    }, 1000);//防抖时间
  }
}

function throttle(fn) {
  // 函数能否运行标记
  let canRun = true
  return function () {
    // 函数是否能运行
    if (!canRun) return
    // 将函数设为不能运行
    canRun = false
    setTimeout(() => {
      fn.apply(this, arguments)
      // 函数运行完后设为可运行
      canRun = true
    }, 1000);//节流间隔时间
  }
}

// 在输入框输入时，要搜索某个字符串，
// 一种方法就是等待用户停止输入，比如过了500ms用户都没有再输入，那么就搜索此时的字符串，这就是防抖；
// 如果我们希望给用户一些搜索提示，所以在用户输入过程中，没过500ms就查询一次相关字符串，这就是节流