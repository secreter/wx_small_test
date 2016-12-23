//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  _changeMotto(){
    this.setData({
      motto: 'changed motto'
    })
    var page=getCurrentPages()
    console.log(page)
  },
  onLoad: function () {
    console.log('page index onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  // onReady() {
  //   // Do something when page ready.
  //   console.log('page index onReady')
  // },
  // onShow() {
  //   // Do something when page show.
  //   console.log('page index onShow')
  // },
  // onHide() {
  //   // Do something when page hide.
  //   console.log('page index onHide')
  // },
  // onUnload() {
  //   // Do something when page close.
  //   console.log('page index onUnload')
  // },
  // onPullDownRefresh() {
  //   // Do something when pull down.
  //   console.log('page index onPullDownRefresh')
  // },
  // onReachBottom() {
  //   // Do something when page reach bottom.
  //   console.log('page index onReachBottom')
  // },
  // onShareAppMessage () {
  //  // return custom share data when user share.
  //  console.log('page index onShareAppMessage')
  //  return {
  //     title: '自定义分享标题',
  //     desc: '自定义分享描述',
  //     path: '/pages/index'
  //   }
  // }
})
