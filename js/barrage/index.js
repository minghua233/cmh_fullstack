let data = [{
    value: '麻烦给我的爱人来一杯mojito',
    time: 5,
    color: 'red',
    speed: 1,
    fontSize: 22
  },
  {
    value: '周杰伦真帅',
    time: 10,
    color: '#00a1f5',
    speed: 1,
    fontSize: 30
  },
  {
    value: '我喜欢看她微醺时的眼眸',
    time: 14,
    color: '#00a1f5'
  },
  {
    value: '我的咖啡，糖不用太多',
    time: 20
  }
]

let canvas = document.getElementById('canvas')
let video = document.getElementById('video')
let $txt = document.getElementById('text')
let $btn = document.getElementById('btn')
let $color = document.getElementById('color')
let $range = document.getElementById('range')

// 创建渲染弹幕的类
class CanvasBarrage {
  constructor(canvas, video, opts = {}) {
    if (!canvas || !video) return

    // 将传进来发参数挂载this上
    this.video = video
    this.canvas = canvas
    // 设置canvas的宽高和video宽高一致
    this.canvas.width = video.width
    this.canvas.height = video.height

    // 获取画布，操作画布
    this.ctx = canvas.getContext('2d')

    // 设置默认参数，如果用户没传我就给它带上
    let defOpts = {
      color: '#e9ie63',
      speed: 1.5,
      opacity: 0.5,
      fontSize: 20,
      data: []
    }
  }
}