'use strict';

const Movie = require('../movie');

class Children extends Movie {
    constructor(name, movie) {
        super(name, movie);
        this.amount = 1.5;
        this.freeDay = 3;
    }

    getAmount(daysRented) {
        let totalAmount = this.amount;
        if (daysRented > this.freeDay)
            totalAmount += (daysRented - this.freeDay) * this.amount;

        return totalAmount;
    }

    getPoints() {
        return 1;
    }
}

module.exports = Children;