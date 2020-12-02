const AipOcrClient = require('baidu-aip-sdk').ocr,
  fs = require('fs'),
  APP_ID = '23082441',
  APi_KEY = 'jzsX06ZR9PvlR8y2eUW5lHtn',
  SECRET_KEY = '7GfSHwxp3uc93GFsyKwMlFtEGGZtDs6s'

const image = fs.readFileSync('./car_number.jpg').toString('base64')
// console.log(image);

const options = {}
options['multi_detect'] = 'true'

const client = new AipOcrClient(APP_ID, APi_KEY, SECRET_KEY)

// http 协议 云端 AI sdk
client.licensePlate(image, options).then((result) => {
  console.log(result);
}).catch((err) => {
  console.log(err);
})