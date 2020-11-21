// let foo = {
//   value: 1,
//   getValue: function () {
//     console.log(this.value)
//   }
// }
// foo.getValue()  // 输出1，getValue()在foo内被调用，this绑定在foo作用域中。


// let foo = {
//   value: 1,
//   getValue: () => console.log(this.value)
// }

// foo.getValue()  // 输出undefined，箭头函数内没有this，this默认绑定至window


function Foo() {
  this.value = 1
}

Foo.prototype.getValue = () => console.log(this.value);

let foo = new Foo
foo.getValue()