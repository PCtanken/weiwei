var changpwd = {
	init:function(){
		// this.bindEvent();
		this.smallhover();
		this.bindEvent();
		this.amound();
		this.cityhover();
	},
	//至全国hover效果
	cityhover:function(){
		var $city = $('.ncs-freight dt');
		var $eachcity = $('#transport_pannel')
		$city.hover(function(){
			$eachcity.css('display','block');
		},function(){
			$eachcity.css('display','none')
		})
		//点击切换城市
		var $ncrecive = $('#ncrecive').html();
		var $Cityval = $('#transport_pannel a');
		//根据城市计算路费
		var $pcrce = $('#nc_kd em').html();
		$Cityval.on('mouseup',function(){
			$ncrecive = '';
			var rest = '';
			$.each($(this),function(idx,item){
				rest = $(item).html();
			})
			$('#ncrecive').html(rest);
			if($(this).index()%2 == 0){
				$pcrce = '';
				$('#nc_kd em').html(350)
			}else{
				$('#nc_kd em').html(500)
			}
		})
	},

	//点击增加减少数量时间
	amound:function(){
		var $increase = $('.increase');
		var $decrease = $('.decrease');
		$increase.on('click',function(){
			var $val = parseInt($('#quantity').val());
			$('#quantity').val($val+1)
		});
		$decrease.on('click',function(){
			var $val = parseInt($('#quantity').val());
			if($val>0){
				$('#quantity').val($val-1)
			}
		})
	},
	//移入小图hover效果
	smallhover:function(){
		var $bigimg = $('.jqzoom img')[0];
		var $smallimg = $('.items>ul>li>img');
		$smallimg.each(function(index,item){
			$(item).on('mouseover',function(){
				$bigimg.src = this.src;

			})
		})
	},
	//放大镜效果
	bindEvent:function(){
		var $box = $('#preview');
		var $divImg = $('.jqzoom');
		var $smallimg = $('.jqzoom img');
		var $itemimg = $('.items>ul>li>img');
		var $lens = $('<span/>').addClass('lens').hide().appendTo($divImg);

		$itemimg.each(function(index,item){
			$(item).on('mouseover',function(){
				$smallimg.removeClass();
			
				var bigUrl = $(this).attr("data-big");
				//生成默认样式
				var $bigLens = $('<div/>').addClass('zoomdiv').append('<img src="'+bigUrl+'"/>').hide().appendTo($box);
				//大图显示位置
				var bigLeft,bigTop;	
				bigTop = 0;
				bigLeft = $divImg.outerWidth()+10;
				//大图属性
				$bigLens.css({
					width:360,
					height:400,
					left:bigLeft,
					top:bigTop
				});
				//大图图片
				var $bigImg = $bigLens.find('img');

				//计算小图和大图的比例
				var radios;
				//当鼠标移入显示大图镜头
				$divImg.on('mouseenter',function(){
					$lens.show();
					$bigLens.show();
					radios = $smallimg.outerWidth()/$bigImg.outerWidth();
					console.log(radios)
				})
				//当鼠标移除 移除镜头
				.on('mouseleave',function(){
					$lens.hide();
					$bigLens.hide();
				})
				//鼠标移动效果
				.on('mousemove',function(e){
					var _left = e.clientX - $lens.outerWidth()/2 - $divImg.offset().left;
					var _top = e.clientY - $lens.outerHeight()/2 - $divImg.offset().top + $(document).scrollTop();

					if(_left <= 0){
		                _left = 0;
		            }else if(_left >= $smallimg.outerWidth()-$lens.outerWidth()){
		                _left = $smallimg.outerWidth()-$lens.outerWidth();
		            }

		            if(_top <= 0){
		                _top = 0;
		            }else if(_top >= $smallimg.outerHeight()-$lens.outerHeight()){
		                _top = $smallimg.outerHeight()-$lens.outerHeight();
		            }


					$lens.css({
						top:_top,
						left:_left
					});
					$bigImg.css({
						top:-_top/radios,
						left:-_left/radios
					})
				})
			})

			
		})
		//获取大图路径
		
	}
}
$(function(){
	changpwd.init();
})