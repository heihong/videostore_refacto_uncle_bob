let assert = require('assert');

const Customer = require('../app/domain/customer/customer');
const NewRelease = require('../app/domain/movie/types/newRelease');
let Rental = require('../app/domain/rental/rental');

describe('Customer', function () {

    let customer, newRealese, daysRented, rental;

    beforeEach(()=> {
        customer = new Customer('customer');
        newRealese = new NewRelease("NewRelease");
        daysRented = 3;
        rental = new Rental(newRealese, daysRented);

        customer.addRental(rental);
    });

    it('test getName', function () {

        assert.equal('customer', customer.getName(), 'should be equal')
    })

    it('test addRental and getRentals', function () {

        assert.equal(1, customer.getRentals().length, 'should have one rental')
    })

    it('test getTotalAmount', function () {

        assert.equal(9, customer.getTotalAmount(), "should be equal");
    });

    it('test getTotalPoints', function () {

        assert.equal(2, customer.getTotalPoints(), "should be equal");
    });


});