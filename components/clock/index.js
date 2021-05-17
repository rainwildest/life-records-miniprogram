// components/clock.js
Component({
  behaviors: [Behavior({
    created: function () {

    }
  })],
  lifetimes: {
    attached: function () {
      // 在组件实例进入页面节点树时执行
      const { type } = this.data;
      if (type === 'digital') {
        this.startDigitalTime()
      } else if (type === 'clock') {
        this.startClockDeg()
      }
    },
    detached: function () {
      // 在组件实例被从页面节点树移除时执行
    },
  },
  /**
   * 组件的属性列表
   */
  properties: {
    type: {
      type: String,
      value: 'digital',
      observer: "updateType"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    circle: new Array(7),
    hour: 0,
    minute: 0,
    second: 0,

    hourHand: 0,
    minuteHand: 0,
    secondHand: 0,

    timer: null
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getClockDeg: function () {
      const deg = 6;
      const _time = new Date();
      const hrDeg = _time.getHours() * 30;
      const minDeg = _time.getMinutes() * deg;
      const secDeg = _time.getSeconds() * deg;

      const hourDeg = hrDeg + (minDeg / 12),
        minuteDeg = minDeg + (secDeg / 60),
        secondDeg = secDeg;

      return [hourDeg, minuteDeg, secondDeg]
    },
    getDigitalTime: function () {
      const _time = new Date()
      const hour = _time.getHours();
      const minute = _time.getMinutes();
      const second = _time.getSeconds();

      return [hour, minute, second]
    },

    startDigitalTime: function () {
      const [hour, minute, second] = this.getDigitalTime();
      this.setData({
        hour,
        minute,
        second
      });
      const timer = setInterval(() => {
        const [hour, minute, second] = this.getDigitalTime();
        this.setData({
          hour,
          minute,
          second
        });
      }, 1000);

      this.setData({
        timer
      })
    },

    startClockDeg: function() {
      const [hourDeg, minuteDeg, secondDeg] = this.getClockDeg();
        this.setData({
          hourHand: `${hourDeg}deg`,
          minuteHand: `${minuteDeg}deg`,
          secondHand: `${secondDeg}deg`
        });
       const timer = setInterval(() => {
          const [hourDeg, minuteDeg, secondDeg] = this.getClockDeg();
          this.setData({
            hourHand: `${hourDeg}deg`,
            minuteHand: `${minuteDeg}deg`,
            secondHand: `${secondDeg}deg`
          });
        }, 1000)

        this.setData({
          timer
        })
    },

    stopTimer: function() {
      clearInterval(this.data.timer);
    },

    updateType: function () {
      this.stopTimer();
      const {type} = this.data;
      if(type === 'clock') {
        this.startClockDeg();
      } else if(type === 'digital') {
        this.startDigitalTime();
      }
    }
  }
})
