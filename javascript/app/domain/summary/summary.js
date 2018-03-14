'use strict';
const Customer = require('../customer/customer');

class Summary {

	constructor(){}

    makeHeader(customer) {
        return 'Rental Record for ' + customer.getName() + '\n';
    }

    makeContainer(customer) {
        let result = "";
        for(let rental of customer.rentals){
            result += '\t' + rental.getTitle() + '\t'
                + rental.getAmount() + '\n';
        }
        return result
    }

    makeFooter(customer) {
        return'You owed ' + customer.getTotalAmount() + '\n'
            + 'You earned ' + customer.getTotalPoints() + ' frequent renter points \n';
    }

    makeStatement(customer) {
		return  this.makeHeader(customer) +
                this.makeContainer(customer) +
                this.makeFooter(customer);
	}



}

module.exports = Summary;