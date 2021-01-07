// async-await的原理是什么？翻译成Promise
function getJson() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log(2);
      resolve(2)
    }, 2000)
  })
}
// async function testAsync() {
//   await getJson()
//   console.log(3);
// }

// await相当于return，使得await后的语句执行，执行完后返回一个Promise，将后面的语句放入抛出Promise里的.then()执行

function testAsync() {
  return Promise.resolve().then(() => {
    return getJson()
  }).then(() => {
    console.log(3)
  })
}
testAsync() // 2 3