'use strict';

class Movie {
    constructor(title, priceCode) {
        this.title = title;
        this.points = 0;
        this.amount = parseInt(0);
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

    getPoint() {
        return this.points;
    }
}

module.exports = Movie;