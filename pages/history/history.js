// pages/history/history.wxml.js
const app=getApp()

Page({
  data: {
    history:[]
  },
  onShow: function () {
    this.setData({history:wx.getStorageSync('history')})
  },
  back:function(e){
    app.globalData.curLang = e.currentTarget.dataset.lang
    wx.reLaunch({
      url: `/pages/index/index?query=${e.currentTarget.dataset.query}`
    })
  }
})