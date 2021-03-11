// 变量提升

var name = 'World!';

(function () {
  if (typeof name === 'undefined') {
    var name = 'Jack'
    console.log('Goodbye' + name);
  } else {
    console.log('Hello' + name);
  }
})();
// Goodbye Jack

// 变量提升是js将声明移至作用域的顶部
(function () {
  var name
  if (typeof name === 'undefined') {
    name = 'Jack'
    console.log('Goodbye' + name);
  } else {
    console.log('Hello' + name);
  }
})()
