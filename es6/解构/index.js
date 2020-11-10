// let [a] = 1

// console.log(a);

// set
// let arr = [1, 2, 2, 4, 6, 3, 5, 4]
// let newArr = new Set(arr)
// console.log(newArr);


// 报错
// let [x, y, z] = {
//   a: 'a',
//   b: 'b',
//   c: 'c'
// }
// console.log(x);

// set 可以解构
// let [x, y, z] = new Set(['a', 'b', 'c'])
// console.log(x);

// let [foo = true] = [false]
// console.log(foo);
// 为变量赋值为undefined不可，y仍为b
// let [x, y = 'b'] = ['a', undefined]
// console.log(y);
// let [x, y = 'b'] = ['a', null]
// console.log(y);

// let {
//   x,
//   y,
//   z
// } = {
//   x: 'aaa',
//   y: 'bbb'
// }
// console.log(z);

// let {
//   foo: baz
// } = {
//   foo: 'aaa',
//   bar: 'bbb'
// }
// console.log(baz);

// let obj = {
//   p: ['hello', {
//     y: 'world'
//   }]
// }
// let {
//   p: [x, {
//     y
//   }]
// } = obj

// console.log(x+y);

const [a, b, c, d, e] = 'hello'
console.log(c);