var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', indexController.seville);
// app.get('/canary', indexController.canary);
// app.get('/capeVerde', indexController.capeVerde);
// app.get('/straight', indexController.straight);
// app.get('/guam', indexController.guam);
// app.get('/philippines', indexController.philippines);
app.get('/next', indexController.next);

app.get('/:stop', function(req, res) {
	if (indexController[req.params.stop])
		indexController[req.params.stop](req, res);
	else
		res.render('lost')
});
	
var server = app.listen(5669, function() {
	console.log('Express server listening on port ' + server.address().port);
});
