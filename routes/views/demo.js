var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'demo';

	// Load the demos by sortOrder
	view.query('demos', keystone.list('Demo').model.find().sort('sortOrder'));

	// Render the view
	view.render('demo');

};
