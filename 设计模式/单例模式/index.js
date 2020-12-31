// 一个类仅有一个实例
class SingleDog {
  show() {
    console.log('我是一个单例对象');
  }
  static getInstance() {
    if (!SingleDog.instance) {
      SingleDog.instance = new SingleDog()
    }
    
    return SingleDog.instance
  }
}
const s1 = SingleDog.getInstance()
const s2 = SingleDog.getInstance()

s1 === s2