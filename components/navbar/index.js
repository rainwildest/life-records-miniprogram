// components/navbar/navbar.js
Component({
  behaviors: [
    Behavior({
      created: function () {

      },
      onPageScroll: function() {
        console.log('kjkj')
      }
    })
  ],
  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function () {
      // 获取系统信息
      const systemInfo = wx.getSystemInfoSync();
      console.log('status height', systemInfo.statusBarHeight)
      // 胶囊按钮位置信息
      const capsule = wx.getMenuButtonBoundingClientRect();
      // 导航栏高度 = 状态栏到胶囊的间距（胶囊距上距离-状态栏高度） * 2 + 胶囊高度 + 状态栏高度
      console.log('capsule', capsule)
      const navBarHeight = (capsule.top - systemInfo.statusBarHeight) * 2 + capsule.height + systemInfo.statusBarHeight;
      const capsuleRight = systemInfo.screenWidth - capsule.right;
      const capsuleBotton = capsule.top - systemInfo.statusBarHeight;
      const capsuleHeight = capsule.height;
      console.log('78', navBarHeight)
      this.setData({
        navBarHeight,
        capsuleRight,
        capsuleBotton,
        capsuleHeight
      })
    },
    moved: function () { },
    detached: function () { },
    onPageScroll: function() {
      console.log('kjkj')
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {

  },
  onPageScroll: function() {
    console.log('kjkj')
  },
  /**
   * 组件的初始数据
   */
  data: {
    navBarHeight: 0,
    capsuleRight: 0,
    capsuleBotton: 0,
    capsuleHeight: 0
  },
  /**
   * 组件的方法列表
   */
  methods: {
    
  },
})
