var a = {}
var b = Object.prototype

console.log([a.prototype === b, Object.getPrototypeOf(a) == b]) // [ false, true ]

// 对象没有prototype属性，构造函数才有