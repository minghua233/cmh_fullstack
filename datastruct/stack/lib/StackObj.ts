// 存储结构 JSONObject
// O(n) O(1)
// 必须实现以下属性和方法
interface StackObj {
  [propName: number]: any;
}

export default class ObjStack {
  // 定义栈并规定其类型
  private items: StackObj;  //先申明再用 items 是JSON
  private count: number;  // array .length - 1

  constructor() {
    this.items = {}; // JSON Object
    this.count = 0;
  }

  // 入栈，当前栈的大小为新元素的key
  push(item: any) {
    this.items[this.count] = item;
    this.count++;
  }

  // 出栈，当前栈大小-1，取出栈顶元素，删除栈顶元素，返回取出的栈顶元素
  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    // console.log(this.items);
    return result;
  }

  isEmpty() {
    return this.count === 0;
  }

  //  返回栈顶元素，以当前栈大小-1为key获取其对应的value值
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.count - 1];
  }

  // 清空栈内元素
  clear() {
    this.items = {};
    this.count = 0;
  }
  // 获取栈内元素数量
  size(): number {
    return this.count;
  }

  // 将栈内元素转为字符串，遍历当前栈对象中的数据，将栈中的数据用逗号拼接并返回。
  toString() {
    if (this.isEmpty()) {
      return "";
    }
    let objString = `${this.items[0]}`;
    for (let i = 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`
    }
    return objString;
  }
}