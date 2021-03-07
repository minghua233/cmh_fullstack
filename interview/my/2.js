// 改造下面的代码，使之输出0 - 9，写出你能想到的所有解法。
for (var i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000)
}

// 使用闭包保存i的值
for (var i = 0; i < 10; i++) {
  ((i) => {
    setTimeout(() => {
      console.log(i);
    }, 1000)
  })(i)
}

// setTimeout() 第三个以后的参数是作为第一个func()的参数传进去
for (var i = 0; i < 10; i++) {
  setTimeout((i) => {
    console.log(i);
  }, 1000, i)
}