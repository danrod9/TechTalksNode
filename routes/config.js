var config = {
		version:9, 
		activation:"taco",
		slack:"https://walmarttech.slack.com/messages/imagine"
	};

exports.getConfig = function (req, res, next) {
    res.send(config);
};
