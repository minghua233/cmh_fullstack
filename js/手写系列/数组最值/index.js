let array = [1, 2, 3, 2, 0, 5, '6']

// console.log(Math.max()); // -Infinity
// console.log(Math.min()); // Infinity

// 原始方法
// let max = function (array) {
//   let res = array[0]
//   for (let item of array) {
//     if (item > res) {
//       res = item
//     }
//   }
//   return res
// }

// console.log(max(array));

// 使用数组reduce方法
// function max(prev, next) {
//   return Math.max(prev, next)
// }
// console.log(array.reduce(max));

// sort排序
// array.sort(function (a, b) {
//   return b - a
// })
// console.log(array[0]);

//  eval
// let max = eval("Math.max(" + array + ")")

// apply
Math.max.apply(null, array)

