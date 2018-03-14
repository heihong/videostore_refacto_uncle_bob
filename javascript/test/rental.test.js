let assert = require('assert');

const Customer = require('../app/domain/customer/customer');
const NewRelease = require('../app/domain/movie/types/newRelease');
let Rental = require('../app/domain/rental/rental');

describe('Rental', function () {

    let customer, newRealese, daysRented, rental;

    beforeEach('initialize common variables', function () {
        customer = new Customer('customer');
        newRealese = new NewRelease("NewRelease");
        daysRented = 3;
        rental = new Rental(newRealese, daysRented);

        customer.addRental(rental);
    });

    it('test getTitle', function () {

        assert.equal('NewRelease', rental.getTitle(), 'should be equal')
    })

    it('test getDaysRented', function () {

        assert.equal(3, rental.getDaysRented(), 'should be equal')
    })

    it('test getAmount', function () {

        assert.equal(9, rental.getAmount(), "should be equal");
    });

    it('test getPoints', function () {

        assert.equal(2, rental.getPoints(), "should be equal");
    });


});