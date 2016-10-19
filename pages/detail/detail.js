Page({
  data: {
    id: 0,
    content: ''
  },
  onLoad: function (params) {
    this.setData({
      id: params.id
      
    })
  },
  onReady: function () {

    var that = this;
    console.log(that.data.id);
    wx.request({
      url: 'http://localhost/mock/list.json',
      success: function (res) {
        console.log(res.data);
        
        for(var i=0;i<res.data.length;i++){

            if(res.data[i].id==that.data.id){
              that.setData({
                content: res.data[i].img
            })
            }
        }
            
          }
      
      
    })
  }
})
