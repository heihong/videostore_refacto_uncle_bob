import { Rental } from './rental';

export class Report {
    private _rentals: Rental[] = [];

    constructor(readonly customerName: string) { }

    addRental(rental: Rental) {
        this._rentals.push(rental);
    }

    print() {
        return this.printHeader() +
               this.printLines() +
               this.printFooter();
    }

    private printFooter() {
        return 'You owed ' + this.computeTotalAmount().toFixed(1) + '\n'
            + 'You earned ' + this.computeTotalPoints() + ' frequent renter points\n';
    }

    private computeTotalPoints() {
        return this._rentals.reduce((result, rental) => result + rental.computePoints(), 0);
    }

    private computeTotalAmount() {
        return this._rentals.reduce((result, rental) => result + rental.computeAmount(), 0);
    }

    private printHeader() {
        return 'Rental Record for ' + this.customerName + '\n';
    }

    private printLines() {
        return this._rentals.reduce((result, rental) => result
            + '\t' + rental.getMovieTitle()
            + '\t' + rental.computeAmount().toFixed(1) + '\n', '');
    }
}