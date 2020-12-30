document.getElementById('button').addEventListener('click', function () {
  let ul = document.getElementById('container')
  let now = Date.now()
  const total = 10000

  for (let i = 0; i < total; i++) {
    let li = document.createElement('li')
    li.innerText = ~~(Math.random() * total)
    ul.appendChild(li)
  }

  console.log('js运行时间', Date.now() - now);
  setTimeout(() => {
    console.log('总运行时间', Date.now() - now);
  }, 0)
})