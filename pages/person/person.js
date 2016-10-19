

Page({
    data:{
        person:[],
        dlClassName:''
    },
    onLoad:function(){
        var that=this; 
        wx.request({
            url:"http://localhost/mock/person.json",
            success:function(res){
                console.log(res.data);
                that.setData({
                    person:res.data
                })
                
            },
            fail:function(error){
                console.log(error)
            }
        });
    },
    personDisplay:function(event){
        // console.log(a.dlClassName);
        // console.log(event.currentTarget.dataset.index);
        // console.log(a.dlClassName==event.currentTarget.dataset.index);
        // if(a.dlClassName==event.currentTarget.dataset.index){
        //     this.setData({
        //     dlClassName:0
            
        // });
        // }else{
            console.log(this.data.dlClassName);
            if(this.data.dlClassName==event.currentTarget.dataset.index){
                this.setData({
                    dlClassName:''
                })
            }else{
                this.setData({
                    dlClassName:event.currentTarget.dataset.index
            
                });

            }
            
            // console.log(a.dlClassName);
        
        
        
        
        

    }
})