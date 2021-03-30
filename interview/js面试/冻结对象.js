// Object.seal()
// 使用Object.seal()可以防止向一个对象添加属性和删除属性，但是可以更改属性
let person = {
  name: 'testName',
  age: 'testAge'
};
Object.seal(person);
//可以更改
person.name = 'changeName';
//不能删除
delete person.age;
//不能添加
person.skill = 'study';
// 使用Object.freeze冻结对象
Object.freeze(person);
//不可以更改
person.name = 'changeName';
// Object.defineProperty
Object.defineProperty(person, 'name', {
  writable: false,//不可写
  enumerable: false//不可遍历
});
// 可以通过Object.isFrozen,Object.isSealed,Object.isExtensible判断当前对象的状态
