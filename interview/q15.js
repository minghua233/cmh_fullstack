var arr = Array(3)
arr[0] = 2

arr.map(function (elem) {
  return '1'
})
// 新数组为[1, undefined, undefined]
// callback 每次执行后的返回值（包括 undefined）组合起来形成一个新数组。 
// callback 函数只会在有值的索引上被调用；那些从来没被赋过值或者使用 delete 删除的索引则不会被调用。
// 如果被map调用的数组是离散的，新数组将也是离散的保持相同的索引为空