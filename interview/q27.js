[, , ,].join(', ')
// [, , ,] === [ <3 empty items> ]
// 如果一个元素为 undefined 或 null，它会被转换为空字符串。

console.log([, , ,].join(', '));  // , , 