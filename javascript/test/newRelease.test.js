let assert = require('assert');

const Customer = require('../app/domain/customer/customer');
const NewRelease = require('../app/domain/movie/types/newRelease');
let Rental = require('../app/domain/rental/rental');

describe('NewRelease', function () {

    let customer, children, daysRented, rental;

    beforeEach('initialize common variables', function () {
        customer = new Customer('customer');
        daysRented = 3;
    });

    it('test getAmount', function () {

        let newRealese = new NewRelease("NewRelease");
        let rental = new Rental(newRealese, daysRented);

        customer.addRental(rental);

        assert.equal(2, newRealese.getPoints(daysRented), "should be equal");
    });

    it('test getPoints', function () {

        let newRealese = new NewRelease("NewRelease");
        let rental = new Rental(newRealese, daysRented);

        customer.addRental(rental);

        assert.equal(2, newRealese.getPoints(daysRented), "should be equal");
    });


    it('test getTotalAmount and getTotalPoints for single', function () {

        let newRealese = new NewRelease("NewRelease");
        let rental = new Rental(newRealese, daysRented);

        customer.addRental(rental);

        assert.equal(9, customer.getTotalAmount(), "should be equal");
        assert.equal(2, customer.getTotalPoints(), "should be equal");
    });

    it('test getTotalAmount and getTotalPoints for single for dual NewRelease', function () {

        let newRealese_1 = new NewRelease("newRealese_1");
        let rental_1 = new Rental(newRealese_1, daysRented);

        let newRealese_2 = new NewRelease("newRealese_2");
        let rental_2 = new Rental(newRealese_2, daysRented);

        customer.addRental(rental_1);
        customer.addRental(rental_2);

        assert.equal(18, customer.getTotalAmount(), "should be equal");
        assert.equal(4, customer.getTotalPoints(), "should be equal");
    });


    it('test getTotalAmount and getTotalPoints for single', function () {

        let newRealese = new NewRelease("NewRelease");
        let rental = new Rental(newRealese, daysRented);

        customer.addRental(rental);

        assert.equal(9, customer.getTotalAmount(), "should be equal");
        assert.equal(2, customer.getTotalPoints(), "should be equal");
    });

    it('test getTotalAmount and getTotalPoints for single for dual NewRelease', function () {

        let newRealese_1 = new NewRelease("newRealese_1");
        let rental_1 = new Rental(newRealese_1, daysRented);

        let newRealese_2 = new NewRelease("newRealese_2");
        let rental_2 = new Rental(newRealese_2, daysRented);

        customer.addRental(rental_1);
        customer.addRental(rental_2);

        assert.equal(18, customer.getTotalAmount(), "should be equal");
        assert.equal(4, customer.getTotalPoints(), "should be equal");
    });


});