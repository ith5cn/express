const express = require('express');
const app = express();


var swig = require('swig')
app.set('view engine', 'html');
app.engine('html',swig.renderFile);


// 设置静态目录
app.use(express.static('public'))
app.get('/',function(req,res,next){
	res.render('index',{
		title:'第一个首页',
		data:"Hello Express"
	})
})
app.listen('8080',function(){
	console.log('接口已经启动')
})