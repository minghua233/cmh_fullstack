// [[3, 2, 1].reduce(Math.pow), [].reduce(Math.pow)]  // 该数组显示结果  
console.log([[3, 2, 1].reduce(Math.pow), [].reduce(Math.pow)]);  //第一项输出9，第二项报错，reduce不能使用于空数组，当数组只有一项时，reduce输出该数组的元素


let arr = [3, 2, 1]
let pow = function (a, b) {
  console.log(a, b);
  return a ** b
}
arr.reduce(pow)