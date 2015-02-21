module.exports = function(req, res, next) {
	req.parse();
	
	res.send('nodejs controller:' + req.app.server + ':' + req.bucket);
};