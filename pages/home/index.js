// pages/home/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    func_block_list:{
      pageone:[
        {
          name:'寝室零食',
          src:'/images/icons8-小吃-50.png',
          categoryId:'snaks'
        },
        {
          name: '寝室零食',
          src: '/images/icons8-小吃-50.png',
        },
        {
          name: '寝室零食',
          src: '/images/icons8-小吃-50.png',
        }, {
          name: '寝室零食',
          src: '/images/icons8-小吃-50.png',
        },
        {
          name: '寝室零食',
          src: '/images/icons8-小吃-50.png',
        },
        {
          name: '寝室零食',
          src: '/images/icons8-小吃-50.png',
        },
        {
          name: '寝室零食',
          src: '/images/icons8-小吃-50.png',
        },
        {
          name: '寝室零食',
          src: '/images/icons8-小吃-50.png',
        }
      ],
    style:'category-info',
    }
    
  },
  _handlecategory:function(e){
    console.log(e); 
    this.setData({
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('第一次打开页面')
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('渲染完成')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('onshow')
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('hide')
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('onshow')
  
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