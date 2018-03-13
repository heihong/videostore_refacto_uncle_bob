'use strict';

const Movie = require('../movie');

class Regular extends Movie{
    constructor(name, movie){
        super(name, movie);
        this.amount = 2;
    }

    getAmount(daysRented){
        let totalAmount = this.amount;
        if (daysRented > 2)
            totalAmount += (daysRented - 2) * 1.5;

        return totalAmount;
    }

    getPoints(){
        return 1;
    }
}

module.exports = Regular;