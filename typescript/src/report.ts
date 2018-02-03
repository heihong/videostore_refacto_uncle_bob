import { Movie }  from './movie';
import { Rental } from './rental';

export class Report {
    private _rentals: Rental[] = [];

    constructor(readonly customerName: string) {
    }

    addRental(rental: Rental) {
        this._rentals.push(rental);
    }

    print() {
        let frequentRenterPoints = 0;
        let totalAmount = 0;
        let result = 'Rental Record for ' + this.customerName + '\n';
        for (let rental of this._rentals) {
            let currentAmount = this.computeAmount(rental);
            frequentRenterPoints += this.computePoints(rental);
            result += '\t' + rental.movie.title + '\t' + currentAmount.toFixed(1) + '\n';
            totalAmount += currentAmount;
        }

        result += 'You owed ' + totalAmount.toFixed(1) + '\n';
        result += 'You earned ' + frequentRenterPoints + ' frequent renter points \n';

        return result;
    }

    private computeAmount(rental: Rental) {
        let amount = 0;
        switch (rental.movie.priceCode) {
            case Movie.REGULAR:
                amount += 2;
                if (rental.daysRented > 2) {
                    amount += (rental.daysRented - 2) * 1.5;
                }
                break;
            case Movie.NEW_RELEASE:
                amount += rental.daysRented * 3;
                break;
            case Movie.CHILDREN:
                amount += 1.5;
                if (rental.daysRented > 3) {
                    amount += (rental.daysRented - 3) * 1.5;
                }
                break;
        }
        return amount;
    }

    private computePoints(rental: Rental) {
        return rental.movie.priceCode == Movie.NEW_RELEASE && rental.daysRented > 1
            ? 2
            : 1;
    }
}