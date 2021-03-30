function bar() { }
function foo() { }
console.log(bar.__proto__)
var obj = new foo()
console.log(obj.__proto__)