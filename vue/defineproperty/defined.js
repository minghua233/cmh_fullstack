let obj = {}
Object.defineProperty(obj, 'num', {
  value: 1,
  writable: true,
  enumerable: true,
  configurable: true,
  // getter 取值时被调用
  get: undefined,
  // setter 设置值时被调用
  set: function (val) {

  }
})

delete obj.num
console.log(obj);