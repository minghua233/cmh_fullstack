const fs = require('fs')
const {
  exec
} = require('child_process')
const http = require('http')

const server = http.createServer((req, res) => {
  // res.end('hello world')
  if (req.url === '/') {
    const files = []
    fs.readdirSync('./').forEach(url => {
      files.push(`<a href="/${url}">${url}</a>`)
    })
    res.end(files.join('</br>'))
  }
})
server.listen(8080, () => {
  const url = `http://127.0.0.1:8080`
  if (process.platform === 'darwin') {
    exec(`open ${url}`)
  } else {
    exec(`start ${url}`)
  }
})

