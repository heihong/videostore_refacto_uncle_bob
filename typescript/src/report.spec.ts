import { Movie  }        from './movie';
import { PricerFactory } from './pricers/pricer-factory';
import { Rental }        from './rental';
import { Report }        from './report';

describe('VideoStore: Report.print()', () => {
    let sut: Report;
    let rentalFactory: RentalFactory;

    class RentalFactory {
        private count = 0;

        childrenMovie(daysRented: number) {
            return this.createRental(daysRented, PricerFactory.forChildrenMovies());
        }

        newRelease(daysRented: number) {
            return this.createRental(daysRented, PricerFactory.forNewReleases());
        }

        regularMovie(daysRented: number) {
            return this.createRental(daysRented, PricerFactory.forRegularMovies());
        }
        
        private createRental(daysRented: number, pricerFactory: PricerFactory) {
            return new Rental(
                new Movie(`${pricerFactory.movieType} #${++this.count}`),
                pricerFactory.create(daysRented));
        }
    }

    beforeEach(() => {
        sut = new Report('Fred');
        rentalFactory = new RentalFactory();
    });

    it('should report a single "New Release" movie rental', () => {
        sut.addRental(rentalFactory.newRelease(3));

        expect(sut.print())
            .toBe(`Rental Record for Fred
\tNew Release #1\t9.0
You owed 9.0
You earned 2 frequent renter points
`);
    });

    it('should report 2 "New Release" movie rentals', () => {
        sut.addRental(rentalFactory.newRelease(3));
        sut.addRental(rentalFactory.newRelease(3));

        expect(sut.print())
            .toBe(`Rental Record for Fred
\tNew Release #1\t9.0
\tNew Release #2\t9.0
You owed 18.0
You earned 4 frequent renter points
`);
    });

    it('should report a single "Children" movie rental', () => {
        sut.addRental(rentalFactory.childrenMovie(3));

        expect(sut.print())
            .toBe(`Rental Record for Fred
\tChildren Movie #1\t1.5
You owed 1.5
You earned 1 frequent renter points
`,);
    });

    it('should report several "Regular" movie rentals', () => {
        sut.addRental(rentalFactory.regularMovie(1));
        sut.addRental(rentalFactory.regularMovie(2));
        sut.addRental(rentalFactory.regularMovie(3));

        expect(sut.print())
            .toBe(`Rental Record for Fred
\tRegular Movie #1\t2.0
\tRegular Movie #2\t2.0
\tRegular Movie #3\t3.5
You owed 7.5
You earned 3 frequent renter points
`);
    });
});
