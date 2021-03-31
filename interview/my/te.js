// // JS软件工程师笔试题一
// // 姓名:                                   开始时间:      :       结束时间:      :      
// // 题目描述:
// // 	实现函数 callIt，调用之后满足如下条件
// // 	1、返回的结果为调用 fn 之后的结果
// // 	2、fn 的调用参数为 callIt 的第一个参数之后的全部参数

// // 解答:

// function callIt(fn) {
//   var args = Array.prototype.slice.call(arguments, 1);
//   var result = fn.apply(this, args);
//   return result;
// }







// 二、题目描述:
// 找出对象 obj 不在原型链上的属性
// 1、返回数组，格式为 key: value
// 2、结果数组不要求顺序
// 数据示例:
// 输入
// var C = function () { this.foo = 'bar'; this.baz = 'bim'; };
// C.prototype.bop = 'bip';
// iterate(new C());
// 输出
// ["foo: bar", "baz: bim"]
// 解答:

// function iterate(obj) {
//   var arr = [];
//   for (var key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       arr.push(key + ": " + obj[key]);
//     }
//   }
//   return arr;
// }


// 三、题目描述
// 给定字符串 str，检查其是否包含 连续3个数字
// 1、如果包含，返回最先出现的 3 个数字的字符串
// 2、如果不包含，返回 false

// 数据示例:

// 输入
// '9876543'

// 输出
// 987

// 解答:
// function captureThreeNumbers(str) {
//   var arr = str.match(/\d{3}/);
//   return arr ? arr[0] : false
// }

// 四、题目描述:
// 求输出结果
// var a = [[[1, 2, 3], [4, 5, 6]], [[7, 8, 9], [10, 11, 12]]];
// console.log(a[1][0][0]);
// console.log(a[1][1][2]);

// 解答: 7 12


// 五、题目描述
// 求输出结果
// function fn(a, b, c) {
//   return a + b + c;
// }

// var _fn = fn.bind(null, 10);
// var result = _fn(20, 30);

// console.log(result);

// 解答: 60

// 六、以下是程序员的十大素质，请按照您理解的重要程度标出排名，并在每个素质后给自己打分(5分制)
// 排名   素质     打分
// （  ） 团队精神 （  ）
// （  ） 心怀理想 （  ）
// （  ） 充满激情 （   ）
// （  ） 基础扎实 （   ）
// （   ） 面向对象 （   ）
// （  ） 求新求精 （   ）
// （  ） 市场意识 （   ）
// （   ） 永不放弃 （  ）
// （   ） 条理清楚 （   ）
// （ ） 全面细致 （   ）