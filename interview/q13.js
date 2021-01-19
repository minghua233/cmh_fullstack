var a = [0]
if ([0]) {
  console.log(a == true);
} else {
  console.log('hello');
}
// a == true经过以下转换
// [0] == true
// [0] == 1
// '0' == 1
// 0 == 1
// 最终结果为false



// [] == [] ?
// false,引用类型,内存地址不一致