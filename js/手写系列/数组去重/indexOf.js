// for循环，使用数组indexOf方法
// function unique(arr) {
//   let res = []
//   for (let i = 0; i < arr.length; i++) {
//     if (res.indexOf(arr[i]) === -1) {
//       res.push(arr[i])
//     }
//   }
//   return res
// }

// 排序后去重
// function unique(arr) {
//   arr = arr.sort();
//   console.log(arr);

//   var arr1 = [arr[0]];
//   for (var i = 1, len = arr.length; i < len; i++) {
//     if (arr[i] !== arr[i - 1]) {
//       arr1.push(arr[i]);
//     }
//   }
//   return arr1;
// }

// 排序后去重
function unique(arr) {
  let res = []
  let sortedArr = arr.concat().sort()
  let seen
  for (let i = 0; i < sortedArr.length; i++) {
    // 如果是第一个元素或者相邻元素不相同
    if (!i || seen !== sortedArr[i]) {
      res.push(sortedArr[i])
    }
    seen = sortedArr[i]
  }
  return res
}

// function unique(arr) {
//   // 如果新数组的当前元素的索引值 == 该元素在原始数组中的第一个索引，则返回当前元素
//   return arr.filter((item, index) => arr.indexOf(item, 0) === index);
// }

let arr = [1, 2, 3, 1, '1', '1', '3']
console.log(unique(arr));