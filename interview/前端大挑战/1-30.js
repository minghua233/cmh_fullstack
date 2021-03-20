// FED1 修改 this 指向
function bindThis(f, oTarget) {
  return f.bind(oTarget)
}

// 为 Array 对象添加一个去除重复项的方法
Array.prototype.uniq = function () {
  // return [... new Set(this)] es6解法
  let res = []
  let hasNaN = false
  this.forEach(e => {
    if (res.indexOf(e) === -1) {
      if (e !== e) {
        if (!hasNaN) {
          res.push(e)
          hasNaN = true
        }
      } else {
        res.push(e)
      }
    }
  })
  return res
}

// 用 JavaScript 实现斐波那契数列函数,返回第n个斐波那契数。 f(1) = 1, f(2) = 1 等
function fibonacci(n) {
  //判断 f(2)=1 f(2)=1
  if (n == 2 || n == 1) {
    return 1;
  }
  //f(n)=f(n-1)+f(n-2)
  return fibonacci(n - 1) + fibonacci(n - 2)
}

// 邮箱字符串判断
function isAvailableEmail(sEmail) {
  var reg = /^([\w+\.])+@\w+([.]\w+)+$/;

  return reg.test(sEmail);
}

// 颜色字符串转换
// 题目描述：将 rgb 颜色字符串转换为十六进制的形式，如 rgb(255, 255, 255) 转为 #ffffff

// rgb 中每个 , 后面的空格数量不固定
// 十六进制表达式使用六位小写字母
// 如果输入不符合 rgb 格式，返回原始输入

// 输入：
// 'rgb(255, 255, 255)'
// 输出：
// #ffffff
function rgb2hex(sRGB) {
  return sRGB.replace(/^rgb\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)\)$/, function (num, num1, num2, num3) {
    //考虑越界问题
    if (num1 < 0 || num1 > 255 || num2 < 0 || num2 > 255 || num3 < 0 || num3 > 255) {
      return num;
    }
    else {
      function rgb(s) {
        if (s < 16) {
          //位数不够时补0
          return '0' + parseInt(s).toString(16);
        }
        else {
          return parseInt(s).toString(16);
        }
      }
      return '#' + rgb(num1) + rgb(num2) + rgb(num3);
    }
  });
}

// 将字符串转换为驼峰格式
function cssStyle2DomStyle(sName) {
  let arr = sName.split('')
  if (arr[0] == '-') {
    arr.splice(0, 1)
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == '-') {
      arr.splice(i, 1)
      arr[i] = arr[i].toUpperCase()
    }
  }
  return arr.join('')
}

// 字符串字符统计
// 题目描述：统计字符串中每个字符的出现频率，返回一个 Object，key 为统计字符，value 为出现频率

// 不限制 key 的顺序
// 输入的字符串参数不会为空
// 忽略空白字符

// 输入：
// 'hello world'
// 输出：
// {h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1}
function count(str) {
  let obj = {}
  for (let i = 0; i < str.length; i++) {
    if (obj[i] !== ' ') {
      let key = str[i]
      if (!obj.hasOwnProperty(key)) {
        obj[key] = 1;
      } else {
        obj[key]++;
      }
    }
  }
  return obj;
}

// 移除数组中的元素
// 题目描述：移除数组 arr 中的所有值与 item 相等的元素。不要直接修改数组 arr，结果返回新的数组

// 输入： [1, 2, 3, 4, 2], 2

// 输出： [1, 3, 4]
function remove(arr, item) {
  const newArr = []
  arr.forEach((el, index) => {
    if (el !== item) {
      newArr.push(el)
    }
  })
  return newArr
}

// 移除数组中的元素
// 题目描述：移除数组 arr 中的所有值与 item 相等的元素，直接在给定的 arr 数组上进行操作，并将结果返回

// 输入： [1, 2, 2, 3, 4, 2, 2], 2

// 输出： [1, 3, 4]
function removeWithoutCopy(arr, item) {
  arr.forEach((el, index) => {
    if (item = el) {
      arr.splice(index, 1)
    }
    index--
  })
  return arr
}

// 添加元素
// 题目描述：在数组 arr 末尾添加元素 item。不要直接修改数组 arr，结果返回新的数组

// 输入： [1, 2, 3, 4], 10

// 输出： [1, 2, 3, 4, 10]
function append(arr, item) {
  return arr.concat([item])
}

// 计数
// 题目描述：统计数组 arr 中值等于 item 的元素出现的次数

// 输入： [1, 2, 4, 4, 3, 4, 3], 4

// 输出： 3
function count(arr, item) {
  let count = 0
  arr.forEach((el) => {
    if (el == item) {
      count++
    }
  })
  return count
}

// 查找重复元素
// 题目描述：找出数组 arr 中重复出现过的元素

// 输入： [1, 2, 4, 4, 3, 3, 1, 5, 3]

// 输出： [1, 3, 4]
function duplicates(arr) {
  let newArr = [];
  arr.forEach((el, index) => {
    if (newArr.indexOf(el) == -1 && arr.indexOf(el) !== arr.lastIndexOf(el)) {
      newArr.push(el);
    }
  })
  return newArr;
}

// 求二次方
// 题目描述：为数组 arr 中的每个元素求二次方。不要直接修改数组 arr，结果返回新的数组

// 输入： [1, 2, 3, 4]

// 输出： [1, 4, 9, 16]
function square(arr) {
  return arr.map(el => Math.pow(el, 2))
}

// 查找元素位置
// 题目描述：在数组 arr 中，查找值与 item 相等的元素出现的所有位置

// 输入： ['a','b','c','d','e','f','a','b','c'] 'a'

// 输出： [0, 6]
function findAllOccurrences(arr, target) {
  let newArr = []
  arr.forEach((el, index) => {
    if (el === target) {
      newArr.push(index)
    }
  })
  return newArr
}

// 计时器
// 题目描述：实现一个打点计时器，要求

// 从 start 到 end（包含 start 和 end），每隔 100 毫秒 console.log 一个数字，每次数字增幅为 1
// 返回的对象中需要包含一个 cancel 方法，用于停止定时操作
// 第一个数需要立即输出
function count(start, end) {
  console.log(start++)
  var timer = setInterval(() => {
    if (start <= end) {
      console.log(start++)
    } else {
      clearInterval(timer)
    }
  }, 100)
  return {
    cancel: function () {
      clearInterval(timer)
    }
  }
}

// 流程控制
// 题目描述：实现 fizzBuzz 函数，参数 num 与返回值的关系如下：

// 如果 num 能同时被 3 和 5 整除，返回字符串 fizzbuzz
// 如果 num 能被 3 整除，返回字符串 fizz
// 如果 num 能被 5 整除，返回字符串 buzz
// 如果参数为空或者不是 Number 类型，返回 false
// 其余情况，返回参数 num
function fizzBuzz(num) {
  if (num == '' || typeof num != 'number') {
    return false;
  }
  var str = '';
  if (num % 3 == 0) {
    str += 'fizz';
  }
  if (num % 5 == 0) {
    str += 'buzz';
  }
  return str || num
}

// 函数传参
// 题目描述：将数组 arr 中的元素作为调用函数 fn 的参数
// 输入：function (greeting, name, punctuation) {return greeting + ', ' + name + (punctuation || '!');}, ['Hello', 'Ellie', '!']
// 输出：Hello, Ellie!
function argsAsArray(fn, arr) {
  return fn(...arr)
}

// 二次封装函数
// 题目描述：实现函数 partialUsingArguments，调用之后满足如下条件：

// 返回一个函数 result
// 调用 result 之后，返回的结果与调用函数 fn 的结果一致
// fn 的调用参数为 partialUsingArguments 的第一个参数之后的全部参数以及 result 的调用参数
function partialUsingArguments(fn) {
  let args = [...arguments].slice(1)
  return function result() {
    return fn.apply(this, args.concat([...arguments]))
  }
}

// 柯里化
// 题目描述：已知 fn 为一个预定义函数，实现函数 curryIt，调用之后满足如下条件：

// 返回一个函数 a，a 的 length 属性值为 1（即显式声明 a 接收一个参数）
// 调用 a 之后，返回一个函数 b, b 的 length 属性值为 1
// 调用 b 之后，返回一个函数 c, c 的 length 属性值为 1
// 调用 c 之后，返回的结果与调用 fn 的返回值一致
// fn 的参数依次为函数 a, b, c 的调用参数

// 输入：var fn = function (a, b, c) {return a + b + c}; curryIt(fn)(1)(2)(3);
// 输出：6
function curryIt(fn) {
  return function a(A) {
    return function b(B) {
      return function c(C) {
        return fn.call(this, A, B, C)
      }
    }
  }
}

// 二进制转换
// 题目描述：获取数字 num 二进制形式第 bit 位的值。注意：

// bit 从 1 开始
// 返回 0 或 1
// 举例：2 的二进制为 10，第 1 位为 0，第 2 位为 1**

// 输入：128, 8
// 输出：1
function valueAtBit(num, bit) {
  let res = num.toString(2)
  return res[res.length - bit]
}
// 题目描述：将给定数字转换成二进制字符串。如果字符串长度不足 8 位，则在前面补 0 到满8位。
function convertToBinary(num) {
  let res = num.toString(2)
  let arr = res.split('')
  if (res.length < 8) {
    arr.unshift('0')
  }
  return arr.join('')
}

// 检查重复字符串
// 题目描述：给定字符串 str，检查其是否包含连续重复的字母（a-zA-Z），包含返回 true，否则返回 false

// 输入：'rattler'

// 输出：true
function containsRepeatingLetter(str) {
  let reg = /([a-zA-Z])\1/
  return reg.test(str)
}
