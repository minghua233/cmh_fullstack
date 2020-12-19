function unique(array, isSorted, iteratee) {
  let res = []
  let seen = []
  for (let i = 0, len = arr.length; i < len; i++) {
    let value = array[i]
    let computed = iteratee ? iteratee(value) : value
    if (isSorted) {
      // 已排序
      if (!i || seen !== computed) {
        res.push(value)
      }
      seen = computed
    } else if (iteratee) {
      if (seen.indexOf(computed) === -1) {
        seen.push(computed)
        res.push(value)
      }
    } else if (res.indexOf(value) === -1) {
      // 未排序
      res.push(value)
    }
  }
  return res
}

let arr = [1, 2, 3, 1, '1', '1', '3', 'a', 'A']
console.log(unique(arr, false, function (item) {
  return typeof item == 'string' ? item.toLowerCase() : item
}));