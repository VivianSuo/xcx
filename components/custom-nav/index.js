const app = getApp();
Component({
  properties:{
    title:{
      type:String,
      value:''
    },
    showGoBack:{
      type:Boolean,
      value:false
    }
    
  },
  data: {
    height: 0
  },
  attached: function () {
    this.setData({
      height: app.globalData.height
    })
  },
  methods:{
    goback: function(){
      wx.navigateBack({
        delta:1
      })
    }
  }
})