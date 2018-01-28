const MovieType = require('../domain/movie').MovieType;

function Customer(name) {
	this.addRental = addRental;
	this.statement = statement;
	
	function getName() {
		return name;
	}
	
	function addRental(rental) {
		rentals.push(rental);
	}
	
	function getCustomerRentals() {
		return rentals;
	}
	
	function statement() {
		let totalAmount = parseInt(0);
		let frequentRenterPoints = 0;
		let rentals = getCustomerRentals();
		let result = 'Rental Record for ' + getName() + '\n';
		
		for (let each of rentals) {
			let thisAmount = 0;
			//determines the amount for each line
			switch (each.getMovie().getPriceCode()) {
				case MovieType.REGULAR:
					thisAmount += 2;
					if (each.getDaysRented() > 2)
						thisAmount += (each.getDaysRented() - 2) * 1.5;
					break;
				case MovieType.NEW_RELEASE:
					thisAmount += each.getDaysRented() * 3;
					break;
				case MovieType.CHILDREN:
					thisAmount += 1.5;
					if (each.getDaysRented() > 3)
						thisAmount += (each.getDaysRented() - 3) * 1.5;
					break;
			}
			frequentRenterPoints++;
			
			if (each.getMovie().getPriceCode() === MovieType.NEW_RELEASE
				&& each.getDaysRented() > 1)
				frequentRenterPoints++;
			
			result += '\t' + each.getMovie().getTitle() + '\t'
				+ thisAmount.toFixed(1) + '\n';
			totalAmount += parseFloat(thisAmount.toFixed(1));
		}
		
		result += 'You owed ' + totalAmount.toFixed(1)+ '\n';
		result += 'You earned ' + frequentRenterPoints + ' frequent renter points \n';
		
		return result;
	}
	
	let rentals = [];
}

module.exports = Customer;