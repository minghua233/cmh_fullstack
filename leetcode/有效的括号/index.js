/**
 * @param {string} str
 * @return {boolean}
 **/

var isValid = function (str) {
  let stack = []; //使用数组实现栈
  let left = ["(", "[", "{"]; //左括号
  let right = [")", "]", "}"]; //右括号
  let len = str.length; //性能优化，不必每次循环都计算一次str.length
  for (let i = 0; i < len; i++) { //遍历字符串，如果为左括号，则入栈，否则栈顶元素出栈并与该元素比较
    if (left.indexOf(str[i]) !== -1) { //左括号
      stack.push(str[i]);
    } else if (right.indexOf(str[i]) !== -1) { //右括号
      if (stack.length === 0) { //栈为空时
        return false;
      } else { //栈长度不为空时
        if (left.indexOf(stack.pop()) !== right.indexOf(str[i])) { //弹出栈顶元素，若其不能与该元素配对
          return false;
        }
      }
    }
  }
  return !stack.length; //栈为空时，返回true，否则返回false

};