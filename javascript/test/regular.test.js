let assert = require('assert');

const Customer = require('../app/domain/customer/customer');
const Regular = require('../app/domain/movie/types/regular');
let Rental = require('../app/domain/rental/rental');

describe('Test class Regular', function () {
    let customer;
    beforeEach(()=> {
        customer = new Customer('customer');
    });

    it('when you rent one movie for one day, should return 2 amount', function () {

        let customer = new Customer("Customer");

        let regular_1 = new Regular("Regular_1");
        let daysRented_1 = 1;
        let rental_1 = new Regular(regular_1, daysRented_1);

        customer.addRental(rental_1);

        assert.equal(2, regular_1.getAmount());

    });

    it('when you rent one movie for one day, should return 1 point', function () {

        let customer = new Customer("Customer");

        let regular_1 = new Regular("Regular_1");
        let daysRented_1 = 1;
        let rental_1 = new Regular(regular_1, daysRented_1);

        customer.addRental(rental_1);

        assert.equal(1, regular_1.getPoints(), "should be equal");
    });

    it('when you rent multiple movie for with different day, should return 7.5 total amount and return 3 total point', function () {

        let customer = new Customer("Customer");

        let regular_1 = new Regular("Regular_1");
        let daysRented_1 = 1;
        let rental_1 = new Regular(regular_1, daysRented_1);

        let regular_2 = new Regular("Regular_2");
        let daysRented_2 = 2;
        let rental_2 = new Regular(regular_2, daysRented_2);

        let regular_3 = new Regular("Regular_3");
        let daysRented_3 = 3;
        let rental_3 = new Rental(regular_3, daysRented_3);

        customer.addRental(rental_1);
        customer.addRental(rental_2);
        customer.addRental(rental_3);

        assert.equal(7.5, customer.getTotalAmount());
        assert.equal(3, customer.getTotalPoints());
    });


});