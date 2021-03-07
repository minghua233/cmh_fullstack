let response = {
  set body(value) {
    this.res.statusCode = 200 // 只要调用了ctx.body = xxx 就会变成成功状态
    this._body = value
  },
  get body() {
    return this._body
  }
}

module.exports = response