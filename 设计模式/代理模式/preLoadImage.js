class PreLoadImage {


  constructor(imgNode) {
    this.imgNode = imgNode
  }

  setSrc(imgUrl) {
    this.imgNode.src = imgUrl

    // 违背了单一原则，不够优雅
    // const image = new Image()
    // image.src = targetUrl

    // image.onload = () => {  // targetUrl已缓存
    //   this.imgNode.src = targetUrl
    // }

  }
}

// 改进
class ProxyImage {
  // 占位图url
  static LOADING_URL = 'xxx'

  constructor(targetImage) {
    this.targetImage = targetImage
  }

  setSrc(targetUrl) {
    this.targetImage.setSrc(ProxyImage.LOADING_URL)

    const virtualImage = new Image()
    virtualImage.onload = () => {
      this.targetImage.setSrc(targetUrl)
    }
    virtualImage.src = targetUrl
  }
}

new PreLoadImage('image')