// let key1 = Symbol(1)
// let key2 = Symbol(1)
// console.log(key1 === key2);

// console.log(typeof (null));

// let obj = {
//   name: 'wn'
// }

// const a = []
// const b = a
// b.push(1)
// console.log(a);

function test(person) {
  person.age = 26
  person = {
    nmae: 'yyy',
    age: 30
  }
  return person
}
const p1 = {
  name: 'xxx',
  age: 25
}
const p2 = test(p1)
console.log(p1);  // xxx 26
console.log(p2);