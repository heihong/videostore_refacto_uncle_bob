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
            let currentAmount = rental.computeAmount();
            frequentRenterPoints += rental.computePoints();
            result += '\t' + rental.movie.title + '\t' + currentAmount.toFixed(1) + '\n';
            totalAmount += currentAmount;
        }

        result += 'You owed ' + totalAmount.toFixed(1) + '\n';
        result += 'You earned ' + frequentRenterPoints + ' frequent renter points \n';

        return result;
    }
}