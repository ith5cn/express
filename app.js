var express = require('express');
var app = express();
require('./controller/admin')(app);
app.use('/static', express.static ("public"));
app.set('view engine', 'ejs');
app.listen('8888',function(){
	console.log('服务正在启动...')
})