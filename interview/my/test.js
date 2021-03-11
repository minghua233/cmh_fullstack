// let name = 'cms'
// let obj = {
//   name: 'hh',
//   fn() {
//     console.log(this.name, 'fn');
//   },
//   fn1: () => {
//     console.log(this.name, 'fn1');
//   }
// }
// let fn3 = obj.fn1
// console.log(obj.fn());
// console.log(obj.fn1());
// console.log(fn3());

let name = 'cms'
let obj = {
  name: 'hh',
  fn() {
    console.log(this.name, 'fn');
  },
  fn1: () => {
    console.log(this.name, 'fn1');
  }
}
console.log(window.name);
let fn3 = obj.fn1
obj.fn()
obj.fn1()
fn3()