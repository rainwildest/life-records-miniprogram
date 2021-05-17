// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
   clockType: 'digital'
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    wx.getSystemInfo({
      success:function (res) {
        console.log(res.windowHeight) // 获取可使用窗口高度
        let windowHeight = (80 * (750 / res.windowWidth)); //将高度乘以换算后的该设备的rpx与px的比例
        console.log(windowHeight,  (750 / res.windowWidth), res.windowWidth) //最后获得转化后得rpx单位的窗口高度
      }
    })
  },
  onReady: function () {
  },
  onPageScroll: function(e) {
    // console.log('kjkj', e)
  },
  changeType: function() {
    console.log(this.clockType)
    const {clockType} = this.data;
    const type = (clockType === 'digital' ? 'clock' : 'digital')
    this.setData({
      clockType: type
    })

    console.log(this.data)
  }
})
