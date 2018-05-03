// pages/home/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    func_block_list:{
      pageone:[
        {
          name:'美食精选',
          src:'/images/icon_1.jpg',
          categoryId:'snaks'
        },
        {
          name: '寝室零食',
          src: '/images/icon_2.jpg',
        },
        {
          name: '食堂外卖',
          src: '/images/icon_3.jpg',
        }, {
          name: '便民服务',
          src: '/images/icon_4.jpg',
        },
        {
          name: '鲜果选购',
          src: '/images/icon_5.jpg',
        },
        {
          name: '甜品特饮',
          src: '/images/icon_6.jpg',
        },
        {
          name: '跑腿办事',
          src: '/images/icon_7.jpg',
        },
        {
          name: '代取快递',
          src: '/images/icon_8.jpg',
        }
      ],
    },
    choicest_list: {
      choicest: [{ name: '店铺1', explian: '说明介绍', address: '爱时尚', minC: 15, addC: 2, sendT: 10,imgU:'',shopid:'24' 
      },
        {
          name: '店铺1', explian: '说明介绍', address: '爱时尚', minC: 15, addC: 2, sendT: 10, imgU: '', shopid: '24'
        }
      ],
    }
  },
  //处理功能块
  _handlecategory:function(e){
    console.log(e); 
    wx.navigateTo({
      url: '../categoryList/' + e.currentTarget.dataset.category + "/" + e.currentTarget.dataset.category
    })
  },
  //处理选择商店
  _handlechoice:function(e){
    console.log(e)
    wx.navigateTo({
      url: '../shop/shop?shopid='+e.currentTarget.dataset.shopid,
    })

  },
  wxSearchTab: function () {
    wx.navigateTo({
      url: '../search/search' // "../"表示返回上一层目录
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  
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