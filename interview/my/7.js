var obj = {
  '2': 3,
  '3': 4,
  'length': 2,
  'splice': Array.prototype.splice,
  'push': Array.prototype.push
}
obj.push(1)
obj.push(2)
console.log(obj)

// 输出结果为
// {
//   '2': 1,
//   '3': 2,
//   length: 4,
//   splice: [Function: splice],
//   push: [Function: push]
// }
// call push这个方法如果对象有length属性，length属性会加1 并且返回
// 只要一个对象的 length 属性为数字，同时splice属性为函数时， 对象的函数输出结果就会变成 伪数组
console.log(!0);