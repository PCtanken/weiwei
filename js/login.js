
	$(function(){
      $('#btn').click(function(){
        $.post('../php/login.php',{
          name: $('#name').val(),
          password: $('#password').val()
        }, function(response){console.log(1)
          var $obj = eval('(' + response + ')');
          if($obj.state){
            window.location.href = '../index.html';
          } else {
            alert($obj.message);
          }
        })        
      })
    })


