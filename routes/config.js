var config = {
		version:1 , 
		activation:"taco"
	};

exports.getConfig = function (req, res, next) {
    res.send(config);
};
