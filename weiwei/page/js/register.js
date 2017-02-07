var register = {
	dom:{},
	flag:{},
	reg:{
		email:/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/,
	},
	init:function(){
		this.getDom();
		this.listen();
	},
	getDom:function(){
		this.dom.btn = $('.border-pc input');
		this.dom.email = $('#email');
		this.dom.verCode = $('.liao').eq(0);
		console.log(this.dom.verCode)
	},
	listen:function(){
		var self = this;
		this.dom.email.blur(function(){
			console.log($(this).val())
			if(!self.reg.email.test($(this).val())){
				self.flag.email = false;
				alert('请填写正确的邮箱格式');
			}else{
				self.flag.email = true;
			}
		})
		this.dom.verCode.blur(function(){
			if($(this).val()!=''){

				self.flag.verCode = true;
			}else{
				self.flag.verCode = false;
			}
		})
		this.dom.btn.on('click',function(){
			var email = self.dom.email.val();
			console.log($('#email').val())
			if(self.flag.email && self.flag.verCode){
				$.get('ajax/register/?name='+email+'&pass=123',function(data){
					console.log(data);
				})
			}
		})
	},
}


