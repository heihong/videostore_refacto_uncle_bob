'use strict';

const Movie = require('../movie');

class NewRelease extends Movie{
    constructor(name){
        super(name);
    }

    getAmount(daysRented){
        return daysRented * 3;;
    }

    getPoints(daysRented){
        if(daysRented > 1)
            return 2 ;
        return 1;
    }
}

module.exports = NewRelease;