let arr = [1, 2, , 3]

// 1. arr 的长度？ 4
// 2. 去除arr中的空项？
// console.log(arr.filter(() => true));
// callback 的值是 filter 遍历到它们那一刻的值。被删除或从来未被赋值的元素不会被遍历到。

// 3. arr2 = arr.map(parseInt)  arr2 = ?  arr= [1, NaN, NaN]
// arr.map((val, index, arr) => {
//   console.log(val, index);
// })
// parseInt(1, 0)
// parseInt(2, 1)
// parseInt(3, 3)

// 4. arr和arr2合并成arr3的结果？ [ 1, 2, undefined, 3, 1, NaN, NaN ]
let arr2 = [1, NaN, NaN]
// arr3 = arr.concat(arr2)
arr3 = [...arr, ...arr2]
// console.log(arr3);

// 5. 去除arr3中的重复内容
// let res = Array.from(new Set(arr3))
// console.log(res);




