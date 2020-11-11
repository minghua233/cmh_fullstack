// 1 == '1'
// 1. 两者类型是否一致，若一致则比较大小
// 2. 若类型不同，则进行类型转换
// 3. 会先判断是否在对比null和undefined，是的话就返回true
// 4. 判断两者是否是string和number，若是则将string转为number
// 5. 判断其中一方是否为Boolean，若是则把Boolean转为number
// 6. 判断其中一方是否为object，且另一方为string或number或symbol，若是就把object转为原始数据类型再判断


// 现在来探讨 [] == ! [] 的结果为什么会是true
// 1、根据运算符优先级 ，！ 的优先级是大于 == 的，所以先会执行 ![]

// ！可将变量转换成boolean类型，null、undefined、NaN以及空字符串('')取反都为true，其余都为false。

// 所以 ! [] 运算后的结果就是 false

// 也就是 [] == ! [] 相当于 [] == false

// 2、根据上面提到的规则（如果有一个操作数是布尔值，则在比较相等性之前先将其转换为数值——false转换为0，而true转换为1），则需要把 false 转成 0

// 也就是 [] == ! [] 相当于 [] == false 相当于 [] == 0

// 3、根据上面提到的规则（如果一个操作数是对象，另一个操作数不是，则调用对象的valueOf()方法，用得到的基本类型值按照前面的规则进行比较，如果对象没有valueOf()方法，则调用 toString()）

// 而对于空数组，[].toString() ->  '' (返回的是空字符串)

// 也就是  [] == 0 相当于 '' == 0

// 4、根据上面提到的规则（如果一个操作数是字符串，另一个操作数是数值，在比较相等性之前先将字符串转换为数值）

// Number('') -> 返回的是 0

// 相当于 0 == 0 自然就返回 true了


// [] == []
// 引用类型是判断指针是否相同




// 闭包
// function A() {
//   let a = 1
//   window.B = function() {
//      console.log(a);
//   }
// }
// A()
// B()

for (var i = 1; i <= 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000)
}
// 输出5个6
// 因为var声明变量变量提升，setTimeout为异步函数，先执行for循环，使得i的值加到了6，然后执行setTimeout输出i

// 解决方式 
// 1. 使用let声明变量
// 2. 使用闭包
// for (var i = 1; i <= 5; i++) {
//   (function (i) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000)
//   })(i)
// }