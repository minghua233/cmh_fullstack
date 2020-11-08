var isValid = function (str) {
  let i = 0,
    j = str.length - 1
  while (i < j) {
    let left = str[i],
      right = str[j]
    if (left !== right) return false
    i++
    j--
  }
  return true
}

console.log(isValid('上海自来'));