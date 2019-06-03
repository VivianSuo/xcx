Component({
  data: {
    selected: 0,
    color: "#7F8389",
    selectedColor: "#3281FA",
    list: [
      {
        pagePath: "/pages/home/index/index",
        text: "首页",
        iconPath: "/img/home.png",
        selectedIconPath: "/img/home_cur.png"
      },
      {
        pagePath: "/pages/consultation/index/index",
        text: "产品资讯",
        iconPath: "/img/consultation.png",
        selectedIconPath: "/img/consultation_cur.png"
      },
      {
        pagePath: "/pages/products/index/index",
        text: "产品中心",
        iconPath: "/img/product.png",
        selectedIconPath: "/img/product_cur.png"
      },
      {
        pagePath: "/pages/contactUs/index/index",
        text: "联系我们",
        iconPath: "/img/contact_us.png",
        selectedIconPath: "/img/contact_us_cur.png"
      }
    ]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      console.log(data)
      const url = data.path
      wx.switchTab({ url })
      this.setData({
        selected: data.index
      })
    }
  }
})