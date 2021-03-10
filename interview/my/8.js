var a = { x: 1 };
var b = a;
a = a.x = { x: 1 };
console.log(a);
console.log(b);
