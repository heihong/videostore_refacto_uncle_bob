'use strict';

const Movie = require('../movie');

class NewRelease extends Movie {
    constructor(title) {
        super(title);
        this.initialCharge = 3;
    }

    getAmount(daysRented) {
        return daysRented * this.initialCharge;
    }

    getPoints(daysRented) {
        if (daysRented > 1)
            return 2;
        return 1;
    }
}

module.exports = NewRelease;