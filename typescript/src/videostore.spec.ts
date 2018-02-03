import { Customer } from './customer';
import { Movie }    from './movie';
import { Rental }   from './rental';

describe('VideoStore', () => {
    let customer: Customer;

    const movieFactory = {
        children  : () => new Movie('Children', Movie.CHILDREN),
        newRelease: (i: number) => new Movie(`New Release ${i}`, Movie.NEW_RELEASE),
        regular   : (i: number) => new Movie(`Regular ${i}`, Movie.REGULAR),
    };

    beforeEach(() => {
        customer = new Customer('Fred');
    });

    it('test single NewRelease statement', () => {
        customer.addRental(new Rental(movieFactory.newRelease(1), 3));

        expect(customer.statement())
            .toBe(`Rental Record for Fred
\tNew Release 1\t9.0
You owed 9.0
You earned 2 frequent renter points 
`);
    });

    it('test dual NewRelease statement', () => {
        customer.addRental(new Rental(movieFactory.newRelease(1), 3));
        customer.addRental(new Rental(movieFactory.newRelease(2), 3));

        expect(customer.statement())
            .toBe(`Rental Record for Fred
\tNew Release 1\t9.0
\tNew Release 2\t9.0
You owed 18.0
You earned 4 frequent renter points 
`);
    });

    it('test single children statement', () => {
        customer.addRental(new Rental(movieFactory.children(), 3));

        expect(customer.statement())
            .toBe(`Rental Record for Fred
\tChildren\t1.5
You owed 1.5
You earned 1 frequent renter points 
`,);
    });

    it('test multiple regular statement', () => {
        customer.addRental(new Rental(movieFactory.regular(1), 1));
        customer.addRental(new Rental(movieFactory.regular(2), 2));
        customer.addRental(new Rental(movieFactory.regular(3), 3));

        expect(customer.statement())
            .toBe(`Rental Record for Fred
\tRegular 1\t2.0
\tRegular 2\t2.0
\tRegular 3\t3.5
You owed 7.5
You earned 3 frequent renter points 
`);
    });
});
