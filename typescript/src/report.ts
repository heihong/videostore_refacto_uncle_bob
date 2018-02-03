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
               this.printFooter(
                    this.computeTotalAmount(),
                    this.computeFrequentRenterPoints());
    }

    private printFooter(totalAmount: number, frequentRenterPoints: number) {
        return 'You owed ' + totalAmount.toFixed(1) + '\n'
            + 'You earned ' + frequentRenterPoints + ' frequent renter points \n';
    }

    private printHeader() {
        return 'Rental Record for ' + this.customerName + '\n';
    }

    private printLines() {
        return this._rentals.reduce((result, rental) => result
            + '\t' + rental.movie.title
            + '\t' + rental.computeAmount().toFixed(1) + '\n', '');
    }

    private computeFrequentRenterPoints() {
        return this._rentals.reduce((result, rental) => result + rental.computePoints(), 0);
    }

    private computeTotalAmount() {
        return this._rentals.reduce((result, rental) => result + rental.computeAmount(), 0);
    }
}