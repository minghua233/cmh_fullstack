class ClassName {
  static name = 'static variable'
  name = 'abc'
  constructor() {
    this.fn = function () { }
  }
  fn() { 

  }
}
console.log(ClassName.name);