'use strict';

class Customer {

    constructor(name) {
        this.name = name || "";
        this.rentals = [];
        this.totalAmount = -1;
        this.frequentRenterPoints = -1;
    }

    getName() {
        return this.name;
    }

    addRental(rental) {
        this.rentals.push(rental);
    }

    getRentals() {
        return this.rentals;
    }

    getTotalAmount() {
        if (this.totalAmount === -1) {
            this.totalAmount = this.sumAllRentalAmount();
        }

        return this.totalAmount;
    }

    getTotalPoints() {
        if (this.frequentRenterPoints === -1) {
            this.frequentRenterPoints = this.sumAllRentalPoint();
        }

        return this.frequentRenterPoints;
    }

    sumAllRentalAmount() {
        return this.rentals.reduce((total, rental) => total + rental.getAmount(), 0);
    }

    sumAllRentalPoint() {
        return this.rentals.reduce((total, rental) => total + rental.getPoints(), 0);
    }
}

module.exports = Customer;