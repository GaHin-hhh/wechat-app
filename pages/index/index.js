// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    showImg:'./../../img/bg.png',
    imgSrc:['./../../img/24.png','./../../img/57.png','./../../img/79.png','./../../img/912.png'],
    setInter :''
  },
  // 事件处理函数
  touchStart(){
    let that=this
    let count = 0
    that.data.setInter = setInterval(function(){
      that.setData({
        showImg:that.data.imgSrc[count++]
      })
      while(count>3) count=0
    },500)
    console.log('star')   
  },
  touchEnd(){
    let that=this
    that.setData({
      showImg : './../../img/bg.png'
    })
    clearInterval(that.data.setInter)
  },
})
