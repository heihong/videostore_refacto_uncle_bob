import { Pricer } from './pricer';

export class HeavyPricer extends Pricer {
    constructor(daysRented: number) {
        super(daysRented, 0, 3, 0);
    }

    computePoints() {
        return this.daysRented <= 1 ? 1 : 2;
    }
}