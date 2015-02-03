var cons = require('consolidate');

module.exports = function(req, res, next) {
	cons.swig('views/swig.html', { user: 'test', cache: false }, function(err, html){
		if(err) return next(err);
		res.send(html);
	});
};