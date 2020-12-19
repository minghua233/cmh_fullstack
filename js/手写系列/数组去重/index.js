// 使用双重for循环和数组的splice方法
// function unique(arr) {
//   for (var i = 0, len = arr.length; i < len; i++) {
//     for (var j = i + 1, len = arr.length; j < len; j++) {
//       if (arr[i] === arr[j]) {
//         arr.splice(j, 1);
//         j--; //每删除一个元素，j-1
//         len--; //同时len-1，以减少循环次数
//       }
//     }
//   }
//   return arr;
// }

// 双重for循环，push
function unique(arr) {
  var res = []
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < res.length; j++) {
      if (arr[i] === res[j]) {
        break
      }
    }
    // 如果arr[i]是唯一的，那么执行循环
    if (j === res.length) {
      res.push(arr[i])
    }
  }
  return res
}



let arr = [1, 2, 3, 1, '1', '1', '3']
console.log(unique(arr));