'use strict';

const Movie = require('../movie');

class NewRelease extends Movie {
    constructor(name) {
        super(name);
        this.amount = 3;
    }

    getAmount(daysRented) {
        return daysRented * this.amount;
    }

    getPoints(daysRented) {
        if (daysRented > 1)
            return 2;
        return 1;
    }
}

module.exports = NewRelease;