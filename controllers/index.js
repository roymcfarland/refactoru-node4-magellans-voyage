var places = require('../models/models.js')

var indexController = {


	seville: function(req, res) {
		res.render('seville', {
			places: places
		});
	},

	canary: function(req, res) {
		res.render('canary', {
			places: places
		});
	},

	capeVerde: function(req, res) {
		res.render('capeVerde', {
			places: places
		});
	},

	straight: function(req, res) {
		res.render('straight', {
			places: places
		});
	},

	guam: function(req, res) {
		res.render('guam', {
			places: places
		});
	},

	philippines: function(req, res) {
		res.render('philippines', {
			places: places
		});
	},

	lost: function(req, res) {
		res.render('lost')
	}
};

module.exports = indexController;