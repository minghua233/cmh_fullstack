var END = Math.pow(2, 53)

var START = END - 100

var count = 0

for (var i = START; i <= END; i++) {
  count++
}
console.log(count); // for循环无限执行

// JS中数字最大值为2^51，i的值永远不会小于end