<?php
	include 'DBHelper.php';
	include 'format.php';
	
	$name =  $_POST['name'];
	$password = $_POST['password'];
	//判断当前 email 是否已存在数据表中
	$emailCheck = format("select * from php where name='{0}'", $_POST["name"]);
	$result = query($emailCheck);
	//当前 email 不存在，执行插入操作
	if(count($result) < 1){
		$sql = "insert into php(name,password) values('$name','$password')";
		 //echo $sql;
	
		$excute = excute($sql);
		if($excute){
			echo "{state: true}";
		} else {
			echo "{state: false, message: '插入失败！！！'}";
		}
	} else {
		echo "{state: false, message: 'name 已被注册！！！'}";
	}
?>