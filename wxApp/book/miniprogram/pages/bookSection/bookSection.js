// pages/bookSection/bookSection.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bookDetailData: {},
    lastData: [],
    pageData: [],
    pageArray: [],
    page: 1, // 当前页
    pre: '',
    next: '',
    preAble: false,
    nextAble: false
  },

  getSection(url) {
    wx.showLoading({
      title: '正在加载'
    })
    wx.cloud.callFunction({
      name: 'bookSection',
      data: {
        url: url
      }
    }).then(res => {
      // console.log(res);
      wx.hideLoading()
      const {
        result
      } = res
      // console.log(result.next.split('/'));
      this.setData({
        bookDetailData: result.bookDetailData,
        lastData: result.lastData,
        pageData: result.pageData,
        pageArray: result.pageArray,
        pre: result.pre,
        next: result.next,
        preAble: result.pre === '' ? true : false,
        nextAble: result.next === '' ? true : false,
        page: Number(result.next.split('/')[2]) - 1
      })
    })
  },

  // 上一页
  prePage() {
    if (this.data.preAble) return
    this.getSection(this.data.pre)
  },

  // 下一页
  nextPage() {
    if (this.data.nextAble) return
    this.getSection(this.data.next)
  },

  // 选择页面
  changePage(e) {
    console.log(e);
    let page = Number(e.detail.value)
    if (page !== this.page) {
      this.setData({
        page: page + 1
      })
      this.getSection(this.data.pageArray[page].name)
    }
  },

  // 去看小说
  navtoUrl(e) {
    console.log(e);
    let url = e.currentTarget.dataset.url
    // 已经存在书架的书，记录阅读状态

    wx.navigateTo({
      url: `../bookContent/bookContent?url=${url}&name=${this.data.bookDetailData.name}&imgUrl=${this.data.bookDetailData.imgurl}`
    })
  },

  // 加入书架 
  joinBook(e) {
    let url = e.currentTarget.dataset.url 
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options);
    const {
      url
    } = options
    this.getSection(url)

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})