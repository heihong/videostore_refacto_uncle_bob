function Rental(movie, daysRented) {
	this.getDaysRented = getDaysRented;
	this.getMovie = getMovie;
	
	function getMovie() {
		return movie;
	}
	
	function getDaysRented() {
		return daysRented;
	}
	
}

module.exports = Rental;