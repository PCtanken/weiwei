var index = {
    dom:{},
    timer:null,
    init:function(){
        this.initDom();
        this.banner();
        this.commodity();
        this.navigation();
        this.Carousel();
        this.tabHover();
    },
    initDom:function(){
        var dom = this.dom;
        dom.section = $('.indexBanner');
        dom.drop = $('.indexBanner>ul');
        dom.prev = $('.prev');
        dom.next = $('.next');
        dom.city = $('.clime');
        dom.picture = $('.picture');
        dom.pictureBtn = $('.picture-btn');
        dom.pictureImg = $('.picture-img');
        dom.pictureCircle = $('.picture-circle');
        dom.tabArticle = $('.tab-article ul');
        dom.tabCantent = $('.tab-content');
    },
    //大轮播图
    banner:function(){
        var dom = this.dom;
        var idx =0;
        var $images = $('.indexBanner li');
        var $paging = $('.indexBanner dl');
        var len = $images.length;
        clearInterval(timer);
        var timer = setInterval(function(){
        	idx++
            showPic()
        },4000);
        dom.section.on('mouseenter',function(){
        	clearInterval(timer);
        	
        }).on('mouseleave',function(){
	        	timer = setInterval(function(){
	        	idx++
	            showPic()
        	},4000);
        })
        //点击左右键切换
        dom.prev.on('click',function(){
            idx--;
        	showPic()
        })
        dom.next.on('click',function(){
        	idx++;
        	showPic();
        })
        //点击下面的分页切换
        $paging.on('click','dd',function(){
        	idx = $(this).index();
        		showPic();	
        })
        function showPic(){
        	if(idx >= len){
				idx = 0;
			}else if(idx < 0){
				idx = len - 1;
			}
	        $images.eq(idx).animate({opacity:1},1000,function(){
                $images.eq(idx).siblings().animate({opacity:0},1000)
            }) 
            
	        $paging.children().removeClass('current').eq(idx).addClass('current')
        }
    },
    commodity:function(){
        var dom = this.dom;
        var $ulList = $('.deliver-address a');
        var $Cityvalue = dom.city.find('em').html();
        $ulList.on('mouseup',function(){
            $Cityvalue = ''; 
            var rest = '';
            $.each($(this),function(idx,item){
                rest = $(item).html();
            });
           dom.city.find('em').html(rest);
        })  
    },
    navigation:function(){
        $('.hover-list').eq(0).hover(function(){
            $('.nav-classify').css('display','block')
            $('.col-block-wrap:lt(11)').css('display','none')
            $('.col-block-wrap:gt(11)').css('display','block')
        },function(){
             $('.nav-classify').css('display','none')
        })
        $('.hover-list').eq(1).hover(function(){
            $('.nav-classify').css('display','block')
            $('.col-block-wrap:lt(11)').css('display','block')
            $('.col-block-wrap:gt(11)').css('display','none')
        },function(){
             $('.nav-classify').css('display','none')
        })
        $('.nav-classify').hover(function(){
            $('.nav-classify').css('display','block')
        },function(){
             $('.nav-classify').css('display','none')
        })
    },
    //小轮播图
    Carousel:function(){
        var dom = this.dom;
        var index =0;
        var len = dom.pictureImg.children().length;
       //设置ul的宽度
       dom.pictureImg.width();
        var timer;
        timer = setInterval(function(){
            index++;
           showTime();
        },4000)
        //移入移出
        dom.picture.on('mouseenter',function(){
            dom.pictureBtn.show();
            clearInterval(timer)
        }).on('mouseleave',function(){
            dom.pictureBtn.hide();
            setInterval(timer);
        });
        //点击左右切换
        var $prevBtn = $('.prevBtn');
        var $nextBtn = $('.nextBtn');
        $prevBtn.on('click',function(){
            index--;
            showTime();
        });
        $nextBtn.on('click',function(){
            index++;
            showTime();
        })
        //点击分页切换
        dom.pictureCircle.children().on('click',function(){
            index = $(this).index();console.log(1)
            showTime();
        })
        function showTime(){
             
            if(index >= len){
                index =0;
            }else if(index <0){
                index = len-1;
            }
            dom.pictureImg.animate({
                left:-590 * index,
            });
            dom.pictureCircle.children().removeClass().eq(index).addClass('selected')
        }
    },
    //tab页面hover效果
    tabHover:function(){
        var dom = this.dom;
        var $tabList = dom.tabArticle.children();
                $tabList.hover(function(e){
                    var index = $(e.target).attr('date');
                    $(this).addClass('current');
                    $(this).siblings().removeClass('current');
                    dom.tabCantent.each(function(idx,item){
                        if(idx==index){
                            $(item).show();
                        }else{
                            $(item).hide();
                        }   
                    })
                },function(){
                    
                })
               
            
           
        
    }

// initialize:function() {
//     map = new BMap.Map("map_container");
//     var cityName = "上海";
// var address = "上海";
// var store_name = ""; 
//     localCity = new BMap.LocalCity();
    
//     map.enableScrollWheelZoom(); 
//     localCity.get(function(cityResult){
//       if (cityResult) {
//         var level = cityResult.level;
//         if (level < 13) level = 13;
//         map.centerAndZoom(cityResult.center, level);
//         cityResultName = cityResult.name;
//         if (cityResultName.indexOf(cityName) >= 0) cityName = cityResult.name;
//                     getPoint();
//               }
//     });
// }
 
// function loadScript() {
//     var script = document.createElement("script");
//     script.src = "http://api.map.baidu.com/api?v=1.2&callback=initialize";
//     document.body.appendChild(script);
// }
// function getPoint(){
//     var myGeo = new BMap.Geocoder();
//     myGeo.getPoint(address, function(point){
//       if (point) {
//         setPoint(point);
//       }
//     }, cityName);
// }
// function setPoint(point){
//       if (point) {
//         map.centerAndZoom(point, 16);
//         var marker = new BMap.Marker(point);
//         map.addOverlay(marker);
//       }
// }

// // 当鼠标放在店铺地图上再加载百度地图。
// $(function(){
//     $('.ncs-info-btn-map').one('mouseover',function(){
//         loadScript();
//     });
// });
// </script> 

// <script>
// $(function(){
//     var store_id = "8734";
//     var goods_id = "100866";
//     var act = "goods";
//     var op  = "index";
//     $.getJSON("index.php?act=show_store&op=ajax_flowstat_record",{store_id:store_id,goods_id:goods_id,act_param:act,op_param:op});
// });

}
$(function(){
    index.init();
    // if(getCookie('account')!='' && getCookie('account')!=null){
    //     $('.account').html(getCookie('account'));
    //     $('.login1').hide();
    //     $('.login2').show();
    // }else{
    //     $('.login1').show();
    //     $('.login2').hide();
    // }
})

