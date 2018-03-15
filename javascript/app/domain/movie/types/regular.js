'use strict';

const Movie = require('../movie');

class Regular extends Movie {
    constructor(title) {
        super(title);
        this.initialCharge = 2;
        this.dayNoExtraCharge = 2;
        this.ratePerExtraDay = 1.5;
    }

    getAmount(daysRented) {
        let totalAmount = this.initialCharge;
        if (daysRented > this.dayNoExtraCharge)
            totalAmount += (daysRented - this.dayNoExtraCharge) * this.ratePerExtraDay;

        return totalAmount;
    }

    getPoints() {
        return 1;
    }
}

module.exports = Regular;