// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    clockType: 'digital',
    // 费用
    cost: 0,
    // 支付
    payment: [
      {
        name: '餐费'
      },
      {
        name: '早餐'
      },
      {
        name: '午餐'
      },
      {
        name: '晚餐'
      },
      {
        name: '零食'
      },
      {
        name: '水果'
      },
      {
        name: '买菜'
      },
      {
        name: '购物'
      },
      {
        name: '其它'
      },
    ],
    //  收入
    income: []
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    wx.getSystemInfo({
      success: function (res) {
        console.log(res.windowHeight) // 获取可使用窗口高度
        let windowHeight = (80 * (750 / res.windowWidth)); //将高度乘以换算后的该设备的rpx与px的比例
        console.log(windowHeight, (750 / res.windowWidth), res.windowWidth) //最后获得转化后得rpx单位的窗口高度
      }
    })
  },
  onReady: function () {
  },
  onPageScroll: function (e) {
    // console.log('kjkj', e)
  },
  // 防止遮罩进行滚动穿透
  myCatchTouch: function () {
    console.log('stop user scroll it!');
    return;
  },
})
