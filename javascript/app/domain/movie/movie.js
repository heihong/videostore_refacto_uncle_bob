'use strict';

class Movie {
    constructor(title, priceCode) {
        this.title = title;
        this.points = -1;
        this.amount = -1;
    }


    getPriceCode() {
        return this.priceCode;
    }

    getTitle() {
        return this.title;
    }

    getAmount() {
        return this.amount;
    }

    getPoints() {
        return this.points;
    }
}

module.exports = Movie;