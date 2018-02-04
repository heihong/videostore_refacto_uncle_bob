import { Pricer } from './pricer';

export class RegularPricer extends Pricer {
    constructor(daysRented: number) {
        super(daysRented, 2, 1.5, 2);
    }

    computePoints() {
        return 1;
    }
}