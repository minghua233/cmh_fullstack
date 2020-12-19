function unique(arr) {
  // 如果新数组的当前元素的索引值 == 该元素在原始数组中的第一个索引，则返回当前元素
  return arr.filter((item, index) => arr.indexOf(item, 0) === index);
}

let arr = [1, 2, 3, 1, '1', '1', '3', 'a', 'A']
console.log(unique(arr));