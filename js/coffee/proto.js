// 通过constructor属性访问构造函数
res = Array.prototype.constructor === Array;
console.log(res); // true

// 一切皆对象
console.log(Array.__proto__); // function () {}
console.log(Array.__proto__.__proto__); //Object {}
console.log(Array.__proto__.__proto__.__proto__); // null
// 由以上可知，JS内置构造器其中之一的Array原本就是一个函数，
// 而这个函数就是Function的prototype，
// 所以Function.prototype有的方法，JS内置构造器都有，比如call()、apply()、bind()等

// 不管从那个属性开始，连续引用__proto__的指针，最后输出的那个值就是null。
console.log(String.__proto__); // function () {}
console.log(String.__proto__.__proto__); //Object {}
console.log(String.__proto__.__proto__.__proto__); // null

// 所有JS内置构造器和自定义函数都是Function构造器的原型(prototype)。
console.log(String.__proto__ === Function.prototype); // true
console.log(Number.__proto__ === Function.prototype); // true
console.log(Boolean.__proto__ === Function.prototype); // true
console.log(Array.__proto__ === Function.prototype); // true
console.log(Function.__proto__ === Function.prototype); // true
console.log(Date.__proto__ === Function.prototype); // true
console.log(Error.__proto__ === Function.prototype); // true
console.log(Object.__proto__ === Function.prototype); // true
console.log(RegExp.__proto__ === Function.prototype); // true
console.log(Event.__proto__ === Function.prototype); // true
// JSON和Math不属于10个构造器函数，但它们12个共同属于Javascript的内置对象。