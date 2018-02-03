import { Movie } from "./movie";

export class Rental {
    constructor(
        readonly movie: Movie,
        readonly daysRented: number,
    ) {}

    computeAmount() {
        let amount = 0;
        switch (this.movie.priceCode) {
            case Movie.REGULAR:
                amount += 2;
                if (this.daysRented > 2) {
                    amount += (this.daysRented - 2) * 1.5;
                }
                break;
            case Movie.NEW_RELEASE:
                amount += this.daysRented * 3;
                break;
            case Movie.CHILDREN:
                amount += 1.5;
                if (this.daysRented > 3) {
                    amount += (this.daysRented - 3) * 1.5;
                }
                break;
        }
        return amount;
    }

    computePoints() {
        return this.movie.priceCode == Movie.NEW_RELEASE && this.daysRented > 1
            ? 2
            : 1;
    }
}