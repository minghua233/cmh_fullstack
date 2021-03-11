function foo() {}
var oldName = foo.name
foo.name = 'bar'  // 函数名禁止被修改
console.log([oldName,foo.name]);  // [ 'foo', 'foo' ]

// console.log(oldName);
