Person.prototype.say = function () {
  console.log("hhh");
};
function Person(name, age) {
  this.name = name;
  this.age = age;
}

function myNew() {
  // 创建一个新的对象obj
  let obj = {};
  // 取到外部传入的构造器
  let Constructor = Array.prototype.shift.call(arguments);
  // 实现继承
  obj.__proto__ = Constructor.prototype;
  // 赋值
  let result = Constructor.apply(obj, arguments);
  return typeof result === "object" ? result : obj;
}

let person = myNew(Person, "小敏", "18");
console.log(person);
person.say();
