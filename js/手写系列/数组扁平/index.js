let arr = [1, [2, [3, 4]]]
// 递归实现
// function faltten(arr) {
//   let res = []
//   for (let i = 0; i < arr.length; i++) {
//     if (!Array.isArray(arr[i])) {
//       res.push(arr[i])
//     } else {
//       res = res.concat(faltten(arr[i]))
//     }
//   }
//   return res
// }


// reduce
// function faltten(arr) {
//   return arr.reduce(function (prev, next) {
//     return prev.concat(Array.isArray(next) ? faltten(next) : next)
//   }, [])
// }

// 解构（最优）
// [1, [2, [3, 4]]] -> 1, [2, [3, 4]] 先融化一层再取值
// console.log([].concat(...arr));
function faltten(arr) {
  while (arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr)
  }
  return arr
}


console.log(faltten(arr));

