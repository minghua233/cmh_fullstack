// function foo() {
//   console.log(this.a);
// }
// var bar = {
//   a: 2
// }
// foo.call(bar)

var a = {
  user: '🐌',
  fn: function() {
    console.log(this.user);
    console.log();
  }
}
var b = a.fn
b.call(a)