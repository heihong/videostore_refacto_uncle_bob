import { Pricer } from './pricer';

export class SoftPricer extends Pricer {
    constructor(daysRented: number) {
        super(daysRented, 1.5, 1.5, 3);
    }

    computePoints() {
        return 1;
    }
}