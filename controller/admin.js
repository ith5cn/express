const IndexController = require('./admin/IndexController');
const indexController = new IndexController();

module.exports = (app)=>{
	app.get('/',function(req,res){
		res.render('../views/pages/index.ejs',indexController.index());
	})
}