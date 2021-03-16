var module = {
  exports: {}
}
var exports = module.exports

module.exports = {
  a: 1
} // 支持动态导入，使用require
exports.a = 1 // 不支持动态导入

var module = require('./a.js')  

// AMD
// 由require.js提出
define([
  './a',
  './b'
], function(a, b) {
  a.do()
  b.do()
});