
var dailyTemperatures = function (T) {
  const len = T.length
  const stack = []
  const res = (new Array(len)).fill(0)  // 初始化结果数据
  for (let i = 0; i <= len; i++) {
    // 如果栈不为0，且存在打破递减趋势的温度值
    while (stack.length && T[i] > T[stack[stack.length - 1]]) {
      // 将栈顶的温度值对应的索引出栈
      const top = stack.pop()
      // 计算当前栈顶的温度值，与第一个高于它的温度值的索引的差
      res[top] = i - top
    }
    // 往栈里面存入索引
    stack.push(i)
  }
  return res
}