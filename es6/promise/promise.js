function xq() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('酒神相亲……');
      resolve('相亲成功！')
      // reject('你太丑')
    }, 1000)
  })

}

function marry() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('结婚大吉！');
      resolve('入洞房')
    }, 500)
  })
}

function baby() {
  console.log('小酒神出生');
}

// xq().then(marry)
xq()
  .then((res) => {
    console.log(res);
    return marry()
  })
  .then((result) => {
    console.log(result);
    baby()
  })
// .catch((err) => {
//   console.log(err);
// })