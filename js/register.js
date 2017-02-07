var register = {
	flag:{
		name:false,
		password:false
	},
	init:function(){
		this.verify();
		this.local();
	},
	verify:function(){
		var self = this;
		$('#name').blur(function(){
			if(!(/^[a-zA-Z0-9_]{3,16}$/.test($(this).val()))){
				alert('请输入正确的账号')
			}else{
				self.flag.name = true;
			}
		})
		$('#password').blur(function(){
			if(!(/^[a-zA-Z0-9_]{3,16}$/.test($(this).val()))){
				alert('只能输入数字或大小写字母，且长度为5-17')
			}else{
				self.flag.password = true;
			}
		})
	},
	local:function(){
		$(function(){
			$('#submit').click(function(){
				$.post('../php/register.php',{
					name: $('#name').val(),
					password: $('#password').val(),
				}, function(response){
					var $obj = eval('(' + response + ')');
					if($obj.state){console.log(1)
						alert('注册成功！');
						window.location.href = '../html/login.html';
					} else {
						alert($obj.message);
					}
				})				
			})
		})

	}
}
$(function(){
	register.init();
})