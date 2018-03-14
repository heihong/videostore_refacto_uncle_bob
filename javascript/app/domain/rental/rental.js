'use strict';

class Rental{
	constructor(movie, daysRented){
		this.movie = (movie) ? movie : "";
		this.daysRented = (daysRented) ? daysRented : 0;
	}
	
	 getTitle() {
		return this.movie.getTitle();
	}
	
	 getDaysRented() {
		return this.daysRented;
	}

	getAmount() {
		return this.movie.getAmount(this.daysRented);
	}

    getPoints() {
        return this.movie.getPoints(this.daysRented);
	}
}

module.exports = Rental;