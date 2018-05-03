// pages/my/my.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hide:0,
    pageone:[
      { src:'/images/myorder.png',name:'我的订单'},
      { src: '/images/waittopaid.png', name: '待付款' },
      { src: '/images/ordered.png', name: '已接单' },
      { src: '/images/refund.png', name: '售后' },
      { src: '/images/mypurchase.png', name: '我的钱包' },
      { src: '/images/ticket.png', name: '优惠券' },
      { src: '/images/money.png', name: '账户余额' },
      { src: '/images/withdrawal.png', name: '提现服务' },
    ],
    userInfo: { avatarUrl: '../../images/head.png' }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 判断是否登陆过？Y-》直接写入 N—》不处理
    if (app.globalData.userInfo){
      this.setData({
        userInfo: app.globalData.userInfo,
        hide:1
      })
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }

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