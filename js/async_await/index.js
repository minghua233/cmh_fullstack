// function a() {
//   return new Promise ((resolve, reject) => {
//     setTimeout(() => {
//       console.log('aaaaa');
//       resolve('ok')
//     }, 1000)
//   })
// }

// function b() {
//   console.log('bbbbb');
// }

// a().then(b)


function timeout (ms) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('你好');
      resolve('')
    }, ms)
  })
}

// async声明函数内部可能存在异步的情况
async function asyncPrint(value, ms) {
  await timeout(ms) // 阻塞同步函数
  console.log(value); // 去到微任务队列
}

asyncPrint('hello world', 1000)
console.log('ok');