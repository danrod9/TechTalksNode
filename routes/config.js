var config = {
		version:23,
		activation:"imagine",
		slack:"https://walmarttech.slack.com/messages/imagine",
		contact:"isd.communications@wal-mart.com"
	};

exports.getConfig = function (req, res, next) {
    res.send(config);
};
