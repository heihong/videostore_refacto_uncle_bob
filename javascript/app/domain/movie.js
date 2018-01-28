const TYPES = {CHILDREN: 2, REGULAR: 0, NEW_RELEASE: 1};

function Movie(title, priceCode) {
	this.getPriceCode = getPriceCode;
	this.getTitle = getTitle;
	
	function getPriceCode() {
		return priceCode;
	}
	
	function getTitle() {
		return title;
	}
}

module.exports = Movie;
module.exports.MovieType = TYPES;