var cart = {
	dom:{},
	init:function(){
		this.bindEvent();
		this.gain();
	},
	bindEvent:function(){
		var goods = document.getElementsByClassName('addcart')[0];
		var itemimg = document.getElementsByClassName('items')[0];
		var summary = document.getElementsByClassName('ncs-goods-summary')[0];
		var namediv = document.getElementsByClassName('name')[0];
		var pricdiv = document.getElementsByClassName('price')[0];
		var box = namediv.getElementsByTagName('font')[0];
		var itemLi = itemimg.getElementsByTagName('li')[0];
		var pricstrong = pricdiv.getElementsByTagName('strong')[0];
		var itemImg = itemimg.getElementsByTagName('img')[0];
		var oCarList = document.getElementsByClassName('incart-goods')[0];
		var ospan = oCarList.getElementsByTagName('span')[0];
		console.log(ospan)
		var carList = [];
		// 事件委托
		goods.onclick = function(e){
			e = e || window.event;
			var target = e.target || e.srcElement;
			//清楚购物车原信息
			ospan.innerHTML = '';
			// 添加到购物车
			var goodsObj = {};
				// 获取当前li
				goodsObj.name = box.innerHTML;
				goodsObj.price = pricstrong.innerHTML;
				goodsObj.imgUrl = itemImg.src;
				
				// 添加到carList
				carList.push(goodsObj);
				
				// 存入cookie
				// 把对象/数组转换诚json字符串：JSON.stringify()
				document.cookie = 'carlist=' + JSON.stringify(carList);
		}
	},
	//获取cookie
	gain:function(){
		var oCarList = document.getElementsByClassName('incart-goods')[0];
		var maney = document.getElementsByClassName('total-price')[0];
		var ospan = oCarList.getElementsByTagName('span')[0];
		if(oCarList != null){
			ospan.innerHTML = '';
			maney.innerHTML = '<p>总金额<i></i></p>';
		}
		
		var carList;
		var cookies = document.cookie.split('; ');
		for(var i=0;i<cookies.length;i++){
			var arr = cookies[i].split('=');
			if(arr[0] === 'carlist'){
				console.log(JSON.parse(arr[1]));
				carList = JSON.parse(arr[1]);
			}
		}
		if(carList){
			var oi = maney.getElementsByTagName('i')[0];
			var ul = document.createElement('ul');
			for(var i=0;i<carList.length;i++){
				var li = document.createElement('li');

				// 商品名
				var title = document.createElement('h4');
				title.innerHTML = carList[i].name;

				// 商品价格
				var price = document.createElement('p');
				
				price.className = 'price';
				price.innerHTML = carList[i].price;
				var oprice = price.cloneNode(true);
				console.log(oprice)
				// 商品图片
				var img = document.createElement('img');
				img.src = carList[i].imgUrl;
				console.log(img)
				li.appendChild(img);
				li.appendChild(title);
				li.appendChild(price);
				oi.appendChild(oprice)

				ul.appendChild(li);
			}
			// 写入页面
			oCarList.appendChild(ul);

		}
	}

}	
$(function(){
	
	cart.init();
})