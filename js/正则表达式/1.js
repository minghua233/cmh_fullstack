// 量词
// {1, 2} 出现次数范围，至少一次，至多两次
var reg = /ab{2,5}/
// 内容模糊
// ab 或者 ba
var reg1 = /ab|ba/
// a1b a2b a3b
var reg2 = /a[123]b/


// console.log(reg.test('babb'));
// console.log(reg1.test('bbbbbbabb'));
// console.log(reg1.test('ab'));

// 0-9 a-f
// #666 #eee
// #
// 3 | 6 数字 字母的组合
let colorReg = /^#[0-9a-fA-F]{3}|^#[0-9a-fA-F]{6}/
let colorReg1 = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})/

// console.log(colorReg.test('#666'));
// console.log(colorReg.test('#666'));
// replace test match
// console.log(colorReg1.exec('#eeefff'));

// 24小时格式
// 18:45
// 23:59

// 时 0 ~ 23
// :
// 分 0 ~ 59
// let timeReg = /[0-23]:[0-59]/ // 超过9不能用区间表示
let timeReg1 = /[01][0-9]|[2][0-3]:[0-5][0-9]/
let timeReg2 = /^([01]\d|2[0-3]):[0-5]\d$/
// console.log(timeReg2.test('23:11'));


