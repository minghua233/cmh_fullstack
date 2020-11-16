// 云函数入口文件
const cloud = require('wx-server-sdk')
const rp = require('request-promise'); // http模块
const cheerio = require('cheerio'); // 对DOM进行操作
let charset = require('superagent-charset'); // 解决乱码
let superagent = require('superagent'); // 发起请求
charset(superagent);

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  let serverUrl = "https://wap.biqiuge8.com/";
  const result = await superagent.get(serverUrl).charset('gb2312'); // .charset('gb2312')取决于网页的编码方式
  
  return {
    result
  }
}