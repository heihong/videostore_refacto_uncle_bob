'use strict';

class Report {

    constructor(customer) {
        this.customer = customer || null;
    }

    makeHeader() {
        return 'Rental Record for ' + this.customer.getName() + '\n';
    }

    makeContainer() {
        let result = "";
        for (let rental of this.customer.rentals) {
            result += '\t' + rental.getTitle() + '\t'
                + rental.getAmount() + '\n';
        }
        return result
    }

    makeFooter() {
        return 'You owed ' + this.customer.getTotalAmount() + '\n'
            + 'You earned ' + this.customer.getTotalPoints() + ' frequent renter points \n';
    }

    makeStatement() {
        return this.makeHeader() +
            this.makeContainer() +
            this.makeFooter();
    }


}

module.exports = Report;