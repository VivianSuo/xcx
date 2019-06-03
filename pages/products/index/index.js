Page({
  data:{
    navTitle: "产品中心",
    showGoBack: false
  },
  onShow:function(){
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 2
      })
    }
  }
})