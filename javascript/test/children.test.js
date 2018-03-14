let assert = require('assert');

const Customer = require('../app/domain/customer/customer');
const Children = require('../app/domain/movie/types/children');
let Rental = require('../app/domain/rental/rental');

describe('Children', function () {
    let customer, children, daysRented, rental;

    beforeEach('initialize common variables', function () {
        customer = new Customer("Customer");
        children = new Children("Children");
        daysRented = 3;
        rental = new Rental(children, daysRented);
        customer.addRental(rental);
    });

    it('test getAmount', function () {

        assert.equal(1.5, children.getAmount(), "should be equal");

    });

    it('test getPoints', function () {

        assert.equal(1, children.getPoints(), "should be equal");

    });

    it('test getTotalAmount', function () {

        assert.equal(1.5, customer.getTotalAmount(), "should be equal");

    });

    it('test getTotalPoints', function () {

        assert.equal(1, customer.getTotalPoints(), "should be equal");

    });


});