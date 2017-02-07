var cart1 ={
	init:function(){
		this.gaincookie();
	},
	gaincookie:function(){
		var tir = document.getElementsByTagName('thead')[0];
		var many = document.getElementsByClassName('clearing')[0];
		var many_i = many.getElementsByTagName('span')[0];
		var omany = many_i.getElementsByTagName('ins')[0]
		
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
			for(var i=0;i<carList.length;i++){
				var tr = document.createElement('tr');
				omany.innerHTML='';
				// 商品名
				var title = document.createElement('td');
				title.innerHTML = carList[i].name;
				// 商品价格
				var price = document.createElement('td');
				
				price.className = 'price';
				price.innerHTML = carList[i].price;
				var oprice = price.cloneNode(true);

				var opricetitle = oprice.innerHTML;
				// 商品图片
				var tdimg = document.createElement('td');
				var img = document.createElement('img');
				img.src = carList[i].imgUrl;
				tdimg.appendChild(img);
				tr.appendChild(tdimg);
				tr.appendChild(title);
				tr.appendChild(price);

			}
			// 写入页面
			tir.appendChild(tr);
			omany.innerHTML = opricetitle;

		}

	}
}
$(function(){
	
	cart1.init();
})