// 字符串反转
// const str = 'maosen'

// const res = str.split('').reverse.join('')

var isPalindrome = function (str) {
  let i = 0,
    j = str.length - 1
  while (i < j) {
    if (str[i] !== str[j]) return false
    i++
    j--
  }
  return true
}
// console.log(isPalindrome('abaaa'));

var validPalindrome = function (str) {
  let flag = isPalindrome(str)
  if (!flag) {
    let i = 0, len = str.length
    while (i < len && !flag) {
      let arrStr = str.split('')
      str = arrStr.join('')
    }
  }
};

function isPalindrome(str, left, right) {
  while (left < right) {
    if (str[left] != str[right]) {
      return false
    }
    left++
    right--
  }
  return true
}

var validPalindrome = function (str) {
  let i = 0, j = str.length - 1
  while (i < j) {
    if (str[i] != str[j]) {
      return isPalindrome(str, i + 1, j) || isPalindrome(str, i, j - 1)
    }
    i++
    j--
  }
  return true
}
