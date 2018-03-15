let assert = require('assert');

const Customer = require('../app/domain/customer/customer');
const NewRelease = require('../app/domain/movie/types/newRelease');
let Rental = require('../app/domain/rental/rental');

describe('Test class newRelease', function () {

    let customer, children, daysRented, rental;

    beforeEach(()=> {
        customer = new Customer('customer');
        daysRented = 3;
    });

    it('when you rent one movie for 3 day, should return 9 amount', function () {

        let newRealese = new NewRelease("NewRelease");
        let rental = new Rental(newRealese, daysRented);

        customer.addRental(rental);

        assert.equal(9, newRealese.getAmount(daysRented));
    });

    it('when you rent one movie for 3 day, should return 2 points', function () {

        let newRealese = new NewRelease("NewRelease");
        let rental = new Rental(newRealese, daysRented);

        customer.addRental(rental);

        assert.equal(2, newRealese.getPoints(daysRented), "should be equal");
    });


    it('when you rent one movie for 3 day, should return 9 total amount and 2 total points', function () {

        let newRealese = new NewRelease("NewRelease");
        let rental = new Rental(newRealese, daysRented);

        customer.addRental(rental);

        assert.equal(9, customer.getTotalAmount(), "should be equal");
        assert.equal(2, customer.getTotalPoints(), "should be equal");
    });

    it('when you rent two movies for 3 day, should return 18 total amount and 4 total points', function () {

        let newRealese_1 = new NewRelease("newRealese_1");
        let rental_1 = new Rental(newRealese_1, daysRented);

        let newRealese_2 = new NewRelease("newRealese_2");
        let rental_2 = new Rental(newRealese_2, daysRented);

        customer.addRental(rental_1);
        customer.addRental(rental_2);

        assert.equal(18, customer.getTotalAmount());
        assert.equal(4, customer.getTotalPoints());
    });

});