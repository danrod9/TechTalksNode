var express = require('express'),
    bodyParser      = require('body-parser'),
    methodOverride  = require('method-override'),
    sessions        = require('./routes/sessions'),
    app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(methodOverride());      // simulate DELETE and PUT

// CORS (Cross-Origin Resource Sharing) headers to support Cross-site HTTP requests
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

// Configuration
app.get('/configuration', config.getConfig);

// Sessions
app.get('/sessions', sessions.findAll);
app.get('/sessions/:id', sessions.findById);

//app.set('port', process.env.PORT || 5000);
app.set('port', process.env.OPENSHIFT_NODEJS_PORT || 8080);
app.set('ip', process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1');

//app.listen(app.get('port'), function () {
//    console.log('Express server listening on port ' + app.get('port'));
//});

app.listen(app.get('port'), app.get('ip'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
