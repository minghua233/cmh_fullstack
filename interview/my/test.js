// let test = (function () {
//   return typeof arguments;
// })();
// console.log(test);  // object

var foo = {
  bar: function () { return this.baz; },
  baz: 1
};

console.log((function () {
  console.log(arguments);
  return typeof arguments[0]();
})(foo.bar));