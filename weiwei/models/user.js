var mongodb = require('./db');
	
	
function User(user){
	this.name = user.name;
	this.password = user.password;
	this.email = user.email;
}

module.exports = User;
//存储新用户信息
User.prototype.newName = function(callback){
	var user = {
		name:this.name,
		password:this.pass,
		email:this.email
	}
	//打开数据库
	mongodb.open(function(err,db){
		if(err){
			return callback(err);
		}
		
		//读取users集合
		db.collection('users',function(err,collection){
			if(err){
				mongodb.close();
				return callback(err);
			}
			//插入用户信息
//			console.log(collection)
			collection.insert(user,{
				safe:true
			},function(err,user){
				mongodb.close();
				if(err){
					return callback(err);
				}
				callback(null)
			})
		})
	})
}

//获取用户信息
User.prototype.get = function(name,callback){
	mongodb.open(function(err,db){
		if(err){
			return callback(err);
		}
		db.collection('users',function(err,collection){
			if(err){
				mongodb.close();
				return callback(err);
			}
			//查询用户信息 find  findOne查询某一条
			collection.findOne({
				name:name
			},function(err,user){
				mongodb.close();
				if(err){
					return callback(err)
				}
				callback(null,user);
			})
		})
	})
}
