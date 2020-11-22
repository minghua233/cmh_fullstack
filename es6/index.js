// var foo = 'bar
// console.log(foo);
// let foo = 'bar'
// var 有变量提升，let没有

// const foo = 'bar'
// foo = 123 // 更改const 定义的常量值报错
// console.log(foo);

// 模板拼接使用``，变量用${}包裹
// let name = "Tom"
// let str = `My name is ${name}.`



// es6 新增的数组方法
let arr = ['a', 'b', 'c']
// console.log(Object.keys(arr));
// let newArr = [...arr.keys()] //新增，直接取得数组下标
// console.log(newArr);

// let iter = arr.entries()  // 取到数组的键值对
// for(let e of iter) {
//   console.log(e);
// }

// let eArr = arr.values() // 通过values()取得数组所有元素值
// for (let e of eArr) {
//   console.log(e);
// }

// function test(fruit) { // 通过includes判断数组内是否有该值
//   const redFruits = ['apple', 'cherry']
//   if( redFruits.includes(fruit)) {
//     console.log('red');
//   }
// }


// let people = [
//   {name: "Tom", age: 20},
//   {name: "Peter", age: 22},
//   {name: "Jane", age: 18}
// ]
// function findFriend(person) {
//   return person.name === 'Tom'
// }
// console.log(people.find(findFriend)); // 通过find查找满足指定条件是数组的值



let test = ['a', 'b', 'c']  
function index(i) {
  return i === 'b'
}
console.log(test.findIndex(index)); // 通过find查找满足指定条件是数组的下标

