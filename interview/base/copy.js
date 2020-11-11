// 1. 什么是浅拷贝？如何实现一个浅拷贝？什么是深拷贝？如何实现一个深拷贝？
// let a = {
//   age: 1
// }
// let b = a
// a.age = 2
// console.log(b.age);

// 解构方法（浅拷贝）
// let c = {
//   age: 1
// }
// let d = {...c}
// c.age = 2

// JSON.stringify()以及JSON.parse()
// var obj1 = {
//   a: 1,
//   b: 2,
//   c: 3
// }
// var objString = JSON.stringify(obj1);
// var obj2 = JSON.parse(objString);
// obj2.a = 5;
// console.log(obj1.a);  // 1
// console.log(obj2.a); // 5

// JSON.stringify()以及JSON.parse()它是不可以拷贝 undefined ， function， RegExp， Symbol
// 不能序列化函数，不能解决循环引用的对象