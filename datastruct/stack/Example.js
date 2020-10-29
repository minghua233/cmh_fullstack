"use strict";
exports.__esModule = true;
const {
  default: Stack
} = require("./lib/stack");
var stack_1 = require("./lib/stack"); // es6 模块化引入
const {
  default: ObjStack
} = require("./lib/StackObj");
var stack = new stack_1["default"]();
stack.push("第一条数据");
stack.push("第二条数据");
stack.pop();
console.log(stack.peek());
console.log(stack.size());
console.log(stack.isEmpty());
console.log(stack.toString());
console.log(stack.clear());

const decimalToBinary = function (decNumber) {
  // 入栈每个位
  let stack = new Stack();
  // 传进来的十进制数
  let number = decNumber;
  // 余数
  let rem;
  // 二进制结果
  let binaryString = "";
  while (number > 0) {
    // 模运算
    rem = Math.floor(number % 2);
    // 将余数入栈
    stack.push(rem);
    // 当前十进制结果除以二
    number = Math.floor(number / 2);
  }
  while (!stack.isEmpty()) {
    binaryString += stack.pop().toString();
  }
  return binaryString;
}
const decimalToBinaryObjStack = function (decNumber) {
  const stack = new ObjStack;
  let number = decNumber;
  let rem;
  let binaryString = "";
  while (number > 0) {
    // 模运算
    rem = Math.floor(number % 2);
    // 将余数入栈
    stack.push(rem);
    // 当前十进制结果除以二
    number = Math.floor(number / 2);
  }
  while (!stack.isEmpty()) {
    binaryString += stack.pop().toString();
  }
  return binaryString;
}

const testNumber = 999989993232287

console.time("数组栈")
console.log(decimalToBinary(testNumber))
console.timeEnd("数组栈")

console.time("对象栈")
console.log(decimalToBinaryObjStack(testNumber))
console.timeEnd("对象栈")