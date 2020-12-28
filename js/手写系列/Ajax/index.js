// let xhr = new XMLHttpRequest()
// // 初始化
// xhr.open('get', 'https://api.github.com/users/github')
// // 发送请求
// xhr.send(data)
// // 设置状态变化回调处理请求结果
// xhr.onreadystatechange = () => {
//   if (xhr.readyState === 4 && xhr.status === 200) {
//     // 0	未初始化。表示对象已经建立，但是尚未初始化，尚未调用 open() 方法
//     // 1	初始化。表示对象已经建立，尚未调用 send() 方法
//     // 2	发送数据。表示 send() 方法已经调用，但是当前的状态及 HTTP 头未知
//     // 3	数据传送中。已经接收部分数据，因为响应及 HTTP 头不安全，这时通过 responseBody 和 responseText 获取部分数据会出现错误
//     // 4	完成。数据接收完毕，此时可以通过 responseBody 和 responseText 获取完整的响应数据
//     console.log(xhr.responseText);
//   }
// }

// 基于promise实现Ajax
function ajax(options) {
  let url = options.url
  const method = options.method.toLowerCase() || 'get'
  const async = options.async
  const data = options.data

  let xhr = new XMLHttpRequest()
  if (options.timeout && options.timeout > 0) {
    xhr.timeout = options.timeout
  }

  return new Promise((resolve, reject) => {
    xhr.ontimeout = () => reject && reject('请求超时')
    // 监听状态变化回调
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
          resolve && resolve(xhr.responseText)
        } else {
          reject && reject()
        }
      }
    }
    // 错误的回调
    xhr.onerror = err => reject && reject(err)

    // 处理请求参数
    let paramArr = []
    let encodeData
    if (data instanceof Object) {
      for (let key in data) {
        paramArr.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      }
      encodeData = paramArr.join('&')
    }

    // get参数拼接
    if (method === 'get') {
      const index = url.indexOf('?')
      if (index === -1) url += '?'
      else if (index !== url.length - 1) url += '&'

      url += encodeData
    }

    xhr.open(method, url, async)
    if (method === 'get') xhr.send(null)
    else {
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8')
      xhr.send(encodeData)
    }
  })
}

// ajax({
//   method: 'get',
//   url: '',
//   async: true,
//   data: {},
//   timeout: 10000
// })