'use strict';

const Movie = require('../movie');

class Regular extends Movie {
    constructor(name, movie) {
        super(name, movie);
        this.amount = 2;
        this.freeDay = 2;
    }

    getAmount(daysRented) {
        let totalAmount = this.amount;
        if (daysRented > this.freeDay)
            totalAmount += (daysRented - this.freeDay) * 1.5;

        return totalAmount;
    }

    getPoints() {
        return 1;
    }
}

module.exports = Regular;