//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    navTitle: "商汤SenseInsight客群洞察",
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    showGoBack:false,
    scrollHeight:0,
    list:[
      {
        imgUrl: "",
        title: "西岸“智慧公共空间管理平台”",
        value: "城市公共空间管理是建设智慧城市的核心问题之一。依托全球领先的人脸识别、视频结构化分析、人群密度监测、以图搜图、轨迹分析等多项原创技术，商汤科技与上海西岸集团联手构建“智慧公共空间管理平台”，实现公共安全管理、智慧区域运营、提升生活体验，让市民享受到更安全、更快捷的人性化服务。"
      },
      {
        imgUrl: "",
        title: "西岸“智慧公共空间管理平台”",
        value: "城市公共空间管理是建设智慧城市的核心问题之一。依托全球领先的人脸识别、视频结构化分析、人群密度监测、以图搜图、轨迹分析等多项原创技术，商汤科技与上海西岸集团联手构建“智慧公共空间管理平台”，实现公共安全管理、智慧区域运营、提升生活体验，让市民享受到更安全、更快捷的人性化服务。"
      },
      {
        imgUrl: "",
        title: "西岸“智慧公共空间管理平台”",
        value: "城市公共空间管理是建设智慧城市的核心问题之一。依托全球领先的人脸识别、视频结构化分析、人群密度监测、以图搜图、轨迹分析等多项原创技术，商汤科技与上海西岸集团联手构建“智慧公共空间管理平台”，实现公共安全管理、智慧区域运营、提升生活体验，让市民享受到更安全、更快捷的人性化服务。"
      },
      {
        imgUrl: "",
        title: "西岸“智慧公共空间管理平台”",
        value: "城市公共空间管理是建设智慧城市的核心问题之一。依托全球领先的人脸识别、视频结构化分析、人群密度监测、以图搜图、轨迹分析等多项原创技术，商汤科技与上海西岸集团联手构建“智慧公共空间管理平台”，实现公共安全管理、智慧区域运营、提升生活体验，让市民享受到更安全、更快捷的人性化服务。"
      },
      {
        imgUrl: "",
        title: "西岸“智慧公共空间管理平台”",
        value: "城市公共空间管理是建设智慧城市的核心问题之一。依托全球领先的人脸识别、视频结构化分析、人群密度监测、以图搜图、轨迹分析等多项原创技术，商汤科技与上海西岸集团联手构建“智慧公共空间管理平台”，实现公共安全管理、智慧区域运营、提升生活体验，让市民享受到更安全、更快捷的人性化服务。"
      }
      
    ]
  },
  onLoad: function () {
    
  },
  onShow: function () {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0
      })
    }
  }
})
