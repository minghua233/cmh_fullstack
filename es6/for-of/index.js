let arr = ['a', 'b', 'c', 'd', 'e']
let obj = {
  name: 'jiushen',
  age: '18',
  sex: 'male'
}

// 可以对下标进行操作
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// 只能取到元素，不能取到下标
// for (let i of arr) {
//   console.log(i);
// }


// for (let i = 0; i < Object.keys(obj).length; i++) {
//   console.log(obj[Object.keys(obj)[i]]);
// }

// 使用for-in遍历对象
// for (let key in obj) {
//   console.log(obj[key]);
// }

// 报错，对象不具备可迭代性 TypeError: obj is not iterable
// for (let i of obj) {
//   console.log(i);
// }

// for-in可以用来遍历数组，但不建议使用。
// for...in循环不仅遍历数字键名，还会遍历手动添加的其他键，甚至包括原型链上的键。
// 数组的键名是数字，但是for...in循环是以字符串作为键名“0”、“1”、“2”等等。
// 某些情况下，for...in循环会以任意顺序遍历键名。
// for (let key in arr) {
//   console.log(arr[key]);
// }

