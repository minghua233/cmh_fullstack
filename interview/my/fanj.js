function fn(a, b, c) {
  return a + b + c;
}

var _fn = fn.bind(null, 10);
var result = _fn(20, 30);

console.log(result);