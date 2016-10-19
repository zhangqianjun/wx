Page({
    data:{
        current:0,
        list:[],
        loadingHidden:false,
        refreshHidden:true,
        loadmoreHidden:true,
        swiper:{
            indicatorDots:false,
            autoplay:true,
            interval:1500,
            duration:500
        }

    },
    changeSwiperDian:function(event){
        this.setData({
            current:event.detail.current
        });
    },
    onLoad:function(){
        var that=this;
        wx.request({
            url:"http://localhost/mock/list.json",
            header: {
                'Content-Type': 'application/json'
            },
            success:function(res){

                setTimeout(function(){
                    that.setData({
                        loadingHidden:true,
                        list:res.data
                    });

                },1500)
                
            },
            fail:function(error){
                console.log(error);
            }
        });

    },
    actionToupper: function () {
    var that = this;
    this.setData({
      refreshHidden: false
    });
    wx.request({
      url: 'http://localhost/mock/list.json',
      success: function (res) {
        setTimeout(function () {
          that.setData({
            list: res.data.concat(that.data.list),
            refreshHidden: true
          });
        }, 1500);
      }
    });
  },

  onPullDownRefresh: function () {
    console.log(0);
  },

  actionTolower: function () {
    var that = this;
    this.setData({
      loadmoreHidden: false
    });
    wx.request({
      url: 'http://localhost/mock/list.json',
      success: function (res) {
        setTimeout(function () {
          that.setData({
            list: that.data.list.concat(res.data),
            loadmoreHidden: true
          });
        }, 1500);
      }
    });
  },

    


})