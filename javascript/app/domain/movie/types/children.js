'use strict';

const Movie = require('../movie');

class Children extends Movie{
    constructor(name, movie){
        super(name, movie);
        this.amount =1.5;
    }

    getAmount(daysRented){
       let totalAmount = this.amount;
        if (daysRented> 3)
            totalAmount += (daysRented - 3) * thisAmount;

        return totalAmount;
    }

    getPoints(){
        return 1;
    }
}

module.exports = Children;