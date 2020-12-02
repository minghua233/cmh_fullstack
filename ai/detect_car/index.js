const AipImageClassifyClient = require('baidu-aip-sdk').imageClassify,
  fs = require('fs'),
  APP_ID = '23082441',
  APi_KEY = 'jzsX06ZR9PvlR8y2eUW5lHtn',
  SECRET_KEY = '7GfSHwxp3uc93GFsyKwMlFtEGGZtDs6s'

const image = fs.readFileSync('./car.jpg').toString('base64')

// console.log(image);

const client = new AipImageClassifyClient(APP_ID, APi_KEY, SECRET_KEY)

// http 协议 云端 AI sdk
client.carDetect(image).then((result) => {
  console.log(result.result[0]);
}).catch((err) => {
  // console.log(err);
})