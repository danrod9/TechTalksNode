var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var sessions = require('./routes/sessions');
var config = require('./routes/config');
var rates_db = require('./database/rates_db');
    
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(methodOverride());      // simulate DELETE and PUT

// CORS (Cross-Origin Resource Sharing) headers to support Cross-site HTTP requests
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
    next();
});

// Configuration
app.get('/configuration', config.getConfig);

// Sessions
app.get('/sessions', sessions.findAll);
app.get('/sessions/:id', sessions.findById);

// Rates
app.post('/rate', function(request, response) {
	var talkId = request.body.talkId;
	var talkRate = request.body.talkRate;
	var speakerRate = request.body.speakerRate;
	var comments = request.body.comments;
	console.log("Talk ID = " + talkId + ", Talk Rate = " + talkRate + ", Speaker Rate = " + speakerRate);
	var res = rates_db.saveRate(talkId, talkRate, speakerRate, comments);
	console.log("Rate save: ", res);
	if (typeof res === 'undefined' || res.length == 0) {
		res = "ERROR";
	}
	response.end(res);
});

//app.set('port', process.env.PORT || 5000);
app.set('port', process.env.OPENSHIFT_NODEJS_PORT || 8080);
app.set('ip', process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1');

//app.listen(app.get('port'), function () {
//    console.log('Express server listening on port ' + app.get('port'));
//});

app.listen(app.get('port'), app.get('ip'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
