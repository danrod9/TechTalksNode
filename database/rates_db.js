var mongoose = require('mongoose');

//default to a 'localhost' configuration:
var conn = '127.0.0.1:27017/' + process.env.OPENSHIFT_APP_NAME;

//if OPENSHIFT env variables are present, use the available connection info:
if (process.env.OPENSHIFT_MONGODB_DB_URL) {
	conn = process.env.OPENSHIFT_MONGODB_DB_URL + process.env.OPENSHIFT_APP_NAME;
}

//if OPENSHIFT env variables are present, use the available connection info:
if (process.env.OPENSHIFT_MONGODB_DB_PASSWORD) {
	conn = process.env.OPENSHIFT_MONGODB_DB_USERNAME + ":" +
		process.env.OPENSHIFT_MONGODB_DB_PASSWORD + "@" +
		process.env.OPENSHIFT_MONGODB_DB_HOST + ':' +
		process.env.OPENSHIFT_MONGODB_DB_PORT + '/' +
		process.env.OPENSHIFT_APP_NAME;
}

console.log("BD conn: ", conn);

//mongoose.connect('mongodb://admin:gTL9rqQMw_cx@127.12.44.2/wmtechtalks');
mongoose.connect('mongodb://' + conn);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
//db.on('disconnected', connect);
db.once('open', function() {
  console.log("Connected to DB!!");
});

// Schema
var rateSchema = mongoose.Schema({
    talkId: { type: Number, index: true },
    talkRate: { type: Number },
    speakerRate: { type: Number },
    comments: { type: String },
    date: { type: Date, default: Date.now }
});

// Model
var Rate = mongoose.model('Rate', rateSchema);

exports.saveRate = function (talkId, talkRate, speakerRate, comments) {
	var rate = new Rate({talkId: talkId, talkRate: talkRate, speakerRate: speakerRate, comments: comments});
	
	// Save rate
	rate.save(function (err, userObj) {
	  if (err) {
	    console.log("not saved: ", err);
	    if (err) throw err;
	  } else {
	    console.log('saved successfully:', userObj);
	  }
	});
	
	return "OK";
}
