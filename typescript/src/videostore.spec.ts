import { Movie  } from './movie';
import { Rental } from './rental';
import { Report } from './report';

describe('VideoStore: Report.print()', () => {
    let report: Report;

    const movieFactory = {
        children  : () => new Movie('Children', Movie.CHILDREN),
        newRelease: (i: number) => new Movie(`New Release ${i}`, Movie.NEW_RELEASE),
        regular   : (i: number) => new Movie(`Regular ${i}`, Movie.REGULAR),
    };

    beforeEach(() => {
        report = new Report('Fred');
    });

    it('should report a single "New Release" movie rental', () => {
        report.addRental(new Rental(movieFactory.newRelease(1), 3));

        expect(report.print())
            .toBe(`Rental Record for Fred
\tNew Release 1\t9.0
You owed 9.0
You earned 2 frequent renter points 
`);
    });

    it('should report 2 "New Release" movie rentals', () => {
        report.addRental(new Rental(movieFactory.newRelease(1), 3));
        report.addRental(new Rental(movieFactory.newRelease(2), 3));

        expect(report.print())
            .toBe(`Rental Record for Fred
\tNew Release 1\t9.0
\tNew Release 2\t9.0
You owed 18.0
You earned 4 frequent renter points 
`);
    });

    it('should report a single "Children" movie rental', () => {
        report.addRental(new Rental(movieFactory.children(), 3));

        expect(report.print())
            .toBe(`Rental Record for Fred
\tChildren\t1.5
You owed 1.5
You earned 1 frequent renter points 
`,);
    });

    it('should report several "Regular" movie rentals', () => {
        report.addRental(new Rental(movieFactory.regular(1), 1));
        report.addRental(new Rental(movieFactory.regular(2), 2));
        report.addRental(new Rental(movieFactory.regular(3), 3));

        expect(report.print())
            .toBe(`Rental Record for Fred
\tRegular 1\t2.0
\tRegular 2\t2.0
\tRegular 3\t3.5
You owed 7.5
You earned 3 frequent renter points 
`);
    });
});
