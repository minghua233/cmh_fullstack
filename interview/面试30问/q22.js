var a = [1, 2, 3]
var b = [1, 2, 3]
var c = [1, 2, 4]

a == b // false
a === b //false

a > c //  false

a < c // true

// 对象比较大小会调用toString方法，按照字典顺序比较大小