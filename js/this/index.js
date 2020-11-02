// function identify() {
//   return this.name.toUpperCase()
// }

// function speak() {
//   var greeting = 'Hello I am ' + identify.call(this)
//   console.log(greeting);
// }

// var me = {
//   name: 'wn'
// }

// var you = {
//   name: 'yangbao'
// }
// speak.call(you)

// function foo() {
//   let person = {
//     name: 'wn',
//     age: 18
//   }
//   console.log(this);
// }
// function bar() {
//   let person = {
//     name: '蜗牛',
//     age: 20
//   }
//   foo()
// }
// bar()

// function foo() {
//   console.log(this.a);
// }
// var a = 2
// (function() {
//   'use strict'
//   foo() // 严格模式下，foo调用，与位置无关
// })()

// 隐式绑定
// function foo() {
//   console.log(this.a);
// }
// var obj2 = {
//   a: 3,
//   foo: foo
// }
// var obj1 = {
//   a: 2,
//   obj2: obj2
// }

// obj1.obj2.foo()

// 隐式丢失
function foo() {
  console.log(this.a);
}

var obj = {
  a: 3,
  foo: foo
}
var bar = obj.foo
var a = 'hello'

bar()