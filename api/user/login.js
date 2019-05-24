var express = require('express');
var url = require('url');
var router = express.Router();
var connection = require('../../db/dbconfig');
var bodyParser = require('body-parser');
// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.post('/login', function (req, res) {
	// var params = url.parse(req.url, true).query;
	// console.log(params.user_name)


	




	var sql = "SELECT * FROM user"
	//创建一个connection连接
	connection.connect(function(err) {
		if (err) {
				console.log('[query] - :' + err);
				return;
		}
		connection.query(sql, function(err, result) {
			if(err) {
					res.send(err); 
			}else{
					// res.send('select success');
					res.json({
						code:1,
						msg:'登陆成功'
					})
					// console.log(result)
			}
			// 释放连接 
			connection.end();
	});
		console.log('[connection connect]  succeed!'); //如果连接成功 控制台输出 success 了
	});
})

module.exports = router