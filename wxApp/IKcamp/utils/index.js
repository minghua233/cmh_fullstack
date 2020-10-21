import config from './config'
import * as Mock from './mock' // 引入一个对象

let util = {
  isDEV: config.isDev,
  log() {
    this.isDEV && console.log(...arguments);
  },
  alert(title = '提示', content = config.defaultAlertMessage) {
    if (typeof content === 'object') {
      content = this.isDEV && JSON.stringify(content)
    }
    wx.wx.showModal({
      title: title,
      content: content,
    });

  },
  getStorageData(key, cb) {
    wx.getStorage({
      key: key,
      success: (res) => {
        cb && cb(res.data)
      },
      fail: (err) => {
        this.log(err)
      }
    });
  },
  setStorageData(key, value = '', cb) {
    wx.setStorage({
      key: key,
      data: value,
      success: (result) => {
        cb && cb()
      },
    });

  },
  request(opt) {
    let {
      url,
      data,
      header,
      method,
      dataType,
      mock = false
    } = opt // es6对象解构
    let self = this
    return new Promise((resolve, reject) => {
      if (mock) {
        let res = {
          statusCode: 200,
          data: Mock[url]
        }
        if (res && res.statusCode == 200 && res.data) {
          resolve(res.data)
        } else {
          self.alert('提示', res)
          reject(res)
        }
      } else {
        wx.request({
          url: url,
          data: data,
          header: header || {
            'content-type': 'application/json'
          },
          method: method || 'GET',
          dataType: dataType || 'json',
          responseType: 'text',
          success: (result) => {
            if (res && res.statusCode == 200 && res.data) {
              resolve(res.data)
            } else {
              self.alert('提示', res)
              reject(res)
            }
          },
          fail: () => {
            self.log(err)
            self.alert('提示', res)
            reject(res)
          }
        });
      }
    })
  }
}

export default util

