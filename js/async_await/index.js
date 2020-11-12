function a() {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      console.log('aaaaa');
      resolve('ok')
    }, 1000)
  })
}

function b() {
  console.log('bbbbb');
}

a().then(b)
