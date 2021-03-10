class EventEmitter {
  constructor() {
    // 存储事件
    this.events = this.events || new Map()
  }
  // 监听事件
  addListener(type, fn) {
    if (!this.events.get(type)) { //若当前未发布或初次订阅
      this.events.set(type, fn) // 订阅相应事件
    }
  }
  // 触发事件
  emit(type) {
    let handle = this.events.get(type) // .get()自动提取到type的值
    handle.apply(this, [...arguments].slice(1)) // 截取handle的参数
  }
}

// 测试
let emitter = new EventEmitter()

emitter.addListener('ages', age => {
  console.log(age);
})