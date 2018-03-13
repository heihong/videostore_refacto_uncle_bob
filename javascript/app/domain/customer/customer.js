'use strict';

class Customer{

    constructor(name){
        this.name = (name) ? name : "";
        this.rentals = [];
        this.totalAmount = parseInt(0);
        this.frequentRenterPoints = 0;
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

    getTotalAmount(){
        if(this.totalAmount == parseInt(0)){
            this.totalAmount = this.calculateAmount();
        }

        return this.totalAmount;
    }

    getTotalPoints(){
        if(this.frequentRenterPoints == 0){
            this.frequentRenterPoints = this.calculatePoints();
        }

        return this.frequentRenterPoints;
    }

    calculateAmount(){
        let amount = parseInt(0);
        for(let rental of this.rentals){
            amount += rental.getAmount();
        }
        return amount;
    }

    calculatePoints(){
        let frequentRenterPoints = 0;
        for(let rental of this.rentals){
            frequentRenterPoints += rental.getPoints();
        }
        return frequentRenterPoints;
    }
}

module.exports = Customer;