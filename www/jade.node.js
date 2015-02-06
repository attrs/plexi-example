var cons = require('consolidate');

module.exports = function(req, res, next) {
	cons.jade('views/jade.html', { user: 'test', cache: false }, function(err, html){
		if(err) return next(err);
		res.send(html);
	});
};