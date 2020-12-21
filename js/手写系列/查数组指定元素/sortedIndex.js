// function cb(func, context) {
//   if (context === void 0) {
//     return function () {
//       return func.apply(context, arguments)
//     }
//   }
// }

// function sortedIndex(array, obj, iteratee, context) {
//   iteratee = cb(iteratee, context)

//   let low = 0;
//   let high = array.length - 1;
//   while (low <= high) {
//     let mid = Math.floor((low + high) / 2);
//     if (iteratee(array[mid]) == iteratee(obj)) {
//       return mid;
//     } else if (iteratee(array[mid]) < iteratee(obj)) {
//       low = mid + 1;
//     } else {
//       high = mid - 1;
//     }
//   }
//   return low
// }
// let stooges = [{ name: 'Tom', age: '30' }, { name: 'Jerry', age: '40' }, { name: 'Lora', age: '60' }]
// let test = sortedIndex(stooges, { name: 'Larry', age: '50' }, function (stooges) {
//   return stooges.age
// })
// console.log(test);



// 在有序数组中插入元素
function sortedIndex(array, obj) {
  let low = 0;
  let high = array.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (array[mid] == obj) {
      return mid;
    } else if (array[mid] < obj) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return low
}

let test = sortedIndex([1, 2, 3, 4, 5], 1)
console.log(test);