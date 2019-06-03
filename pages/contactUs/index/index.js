Page({
  data:{
    navTitle: "联系我们",
    showGoBack: false
  },
  onShow: function () {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 3
      })
    }
  }
})