// class Foo {
//   static bar() {
//     this.baz()
//   }
//   static baz() {
//     console.log('hello');
//   }
//   // baz() {
//   //   console.log('world');
//   // }
// }
// // static声明私有属性，只能在内部使用，避免代码耦合度过高
// // Foo.bar()

// let foo = new Foo()
// foo.baz()


// class Shape {
//   constructor (width, height) {
//     this._width = width
//     this._height = height
//     // this.area = width * height
//   }

//   // 声明为get的方法会自动执行
//   get area () {
//     return this._width * this._height
//   }
// }
// const square = new Shape(10, 10)
// console.log(square.area);