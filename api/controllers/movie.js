module.exports = function(kodi) {
	return {
		findByTitle: function(req, res) {
			var movieTitle = req.query.title;
			console.log(movieTitle)
		}
	}
}