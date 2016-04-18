var mongoose = require('mongoose');

//mongoose.connect('mongodb://wmtechtalks-wmnode.rhcloud.com/my_database');
mongoose.connect('mongodb://localhost/wmtechtalks');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

// Schema
var rateSchema = mongoose.Schema({
    talkId: { type: Number, index: true },
    talkRate: { type: Number },
    date: { type: Date, default: Date.now }
});

// Model
var Rate = mongoose.model('Rate', rateSchema);

function saveRate(talkId, talkRate) {
	var rate = new Rate({talkId: talkId, talkRate: talkRate});
	console.log(rate);
	
	// Save rate
	rate.save(function (err, userObj) {
	  if (err) {
	    console.log(err);
	  } else {
	    console.log('saved successfully:', userObj);
	  }
	});
}
