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
        let amount = [];
        for(let rental of this.rentals){
            amount.push(rental.getAmount());
        }
        let totalAmount = amount.reduce( (total, amount) => {
            return total + amount
        })

        return totalAmount;
    }

    calculatePoints(){
        let points = [];
        for(let rental of this.rentals){
            points.push(rental.getPoints());
        }
        let frequentRenterPoints = points.reduce( (total, amount) => {
            return total + amount
        })

        return frequentRenterPoints;
    }
}

module.exports = Customer;