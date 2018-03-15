'use strict';

class Movie {
    constructor(title) {
        this.title = title;
        this.points = -1;
        this.initialCharge = -1;
    }

    getTitle() {
        return this.title;
    }

    getAmount() {
        return this.initialCharge;
    }

    getPoints() {
        return this.points;
    }
}

module.exports = Movie;