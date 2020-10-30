// var isPalindrome = function (s) {
//   s = s.replace(/[\ |\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\-|\_|\+|\=|\||\\|\[|\]|\{|\}|\;|\:|\"|\'|\,|\<|\.|\>|\/|\?]/g, "");
//   s = s.toLowerCase();
//   var s1 = s.split("");
//   s1.reverse();
//   console.log(s1.join(""));
//   return (s == s1.join("")) ? true : false;
// };


var isPalindrome = function (str) {
  let i = 0,
    j = str.length - 1
  while (i < j) {
    if (!/[0-9a-zA-Z]/.test(str[i])) {
      i++
      continue
    }
    if (!/[0-9a-zA-Z]/.test(str[j])) {
      j--
      continue
    }
    let left = str[i],
      right = str[j]
    if (left.toLowerCase() !== right.toLowerCase()) {
      i++
      j--
    }
    return true
  }
  return false
};

console.log(isPalindrome("race a car"));