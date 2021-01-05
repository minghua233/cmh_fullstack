// vue2.0是如何实现响应式的
// 数据改变了，视图就会更新

let oldArrayPrototype = Array.prototype
let proto = Object.create(oldArrayPrototype);

// 重写了数组方法push() shift() pop() ...
['push', 'shift', 'pop'].forEach(method => {
  // 函数劫持，重写函数
  proto[method] = function () {
    updateView()
    oldArrayPrototype[method].call(this, ...arguments)
  }
})

function observe(target) { // 观察者
  if (typeof target !== 'object' && target === null) {
    return target
  }
  if (Array.isArray(target)) {
    // 更新数组原型上的方法
    // Object.setPrototypeOf(target, proto)
    target.__proto__ = proto
  }
  for (let key in target) {
    defineReactive(target, key, target[key])
  }
}

function defineReactive(target, key, value) {
  if (typeof value === 'object' && value !== null) {
    observe(value)
  }
  Object.defineProperty(target, key, {
    get() {
      return value
    },
    set(newValue) {
      if (newValue !== value) {
        updateView()
        value = newValue
      }
    }
  })
}

function updateView() {
  console.log('更新视图');
}

// Object.defineProperty
let data = {
  name: 'wn',
  age: {
    n: 18
  },
  job: ['coder', 'driver']
}
observe(data)
// console.log(data.age.n);
// data.age.n = 19
// console.log(data.age.n);

data.job.push('teacher')
console.log(data.job);