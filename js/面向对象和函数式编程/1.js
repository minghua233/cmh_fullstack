let url = 'https://www.baidu.com/s?keyword=js&lang=java'
// url 由什么组成
// 
// {
//   keyword: 'js',
//   lang: 'java'
// }

class URL {
  constructor(url) {
    this.url = url
  }
  parseQuery() {
    let url = this.url
    let obj = {}
    let isQuery = url.indexOf('?') >= 0
    if (isQuery) {
      let queryString = url.slice(url.indexOf('?'))
      let querys = queryString.split('&')
      // [xx = xx, xxx = xxx, x = x]
      querys.forEach(kv => {
        let [k, v] = kv.split('=')
        obj[k] = v
      })
    }
    return obj
  }
  parseProtoCol() {
    let url = this.url
    return url.split(':')[0]
  }
}