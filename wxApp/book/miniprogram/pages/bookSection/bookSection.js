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
    next: ''
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
      const {result} = res
      this.setData({
        bookDetailData: result.bookDetailData,
        lastData: result.lastData,
        pageData: result.pageData,
        pageArray: result.pageArray,
        pre: result.pre,
        next: result.next
      })
    })
  },

  // 上一页
  prePage() {
    this.getSection(this.data.pre)
  },
  nextPage() {
    this.getSection(this.data.next)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options);
    const {url} = options
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