// 1、请在不影响原调用的情况下简化下列方法
function func1(c) {
  const a = 1
  const b = 2

  const d = a * b * c

  return a + b + c + d
}

function func2(c) {
  const a = 1
  const b = 2

  const d = a + b + c

  return a + b + c + d
}

function func3(c) {
  const a = 1
  const b = 2

  const d = a - b + c

  return a + b + c + d
}

function func4(c) {
  const a = 1
  const b = 2

  const d = a + b - c

  return a + b + c + d
}

// 简化 构造出 fun1~fun4 四个 功能一模一样的函数
// class Test {
//   constructor(c) {
//     this.a = 1
//     this.b = 2
//     this.c = c
//   }
//   func1() {
//     a
//   }
// ？
function simplyfy(fn) {
  const a = 1,
    b = 2
  return function (c) {
    const d = fn(a, b, c)
    return a + b + c + d
  }
}
const f1 = simplyfy((a, b, c) => a * b * c)
const f2 = simplyfy((a, b, c) => a + b + c)
const f3 = simplyfy((a, b, c) => a - b + c)
const f4 = simplyfy((a, b, c) => a + b - c)
console.log(f1(4) === func1(4));