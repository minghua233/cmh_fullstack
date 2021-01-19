// arguments

function sidEffecting(ary) {
  ary[0] = ary[2]
}

function bar(a, b, c) {
  c = 10
  sidEffecting(arguments) // 参数变量和arguments是双向绑定的
  return a + b + c
}

bar(1, 1, 1)
console.log(bar(1, 1, 1));  // 21