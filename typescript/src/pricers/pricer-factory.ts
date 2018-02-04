import { HeavyPricer }   from './heavy-pricer';
import { Pricer }        from './pricer';
import { RegularPricer } from './regular-pricer';
import { SoftPricer }    from './soft-pricer';

export class PricerFactory {
    static forChildrenMovies() {
        return new PricerFactory('Children Movie', SoftPricer);
    }

    static forNewReleases() {
        return new PricerFactory('New Release', HeavyPricer);
    }

    static forRegularMovies() {
        return new PricerFactory('Regular Movie', RegularPricer);
    }

    private constructor(
        readonly movieType: string,
        readonly pricerConstructor: { new(daysRented: number): Pricer; },
    ) { }
    
    create(daysRented: number) {
        return new this.pricerConstructor(daysRented);
    }
}