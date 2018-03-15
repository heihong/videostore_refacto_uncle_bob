let assert = require('assert');

const Customer = require('../app/domain/customer/customer');
const NewRelease = require('../app/domain/movie/types/newRelease');
let Rental = require('../app/domain/rental/rental');

describe('Test class Customer when you rent one movie for 3 day', function () {

    let customer, newRealese, daysRented, rental;

    beforeEach(()=> {
        customer = new Customer('customer');
        newRealese = new NewRelease("NewRelease");
        daysRented = 3;
        rental = new Rental(newRealese, daysRented);

        customer.addRental(rental);
    });

    it('should return the name of customer', function () {

        assert.equal('customer', customer.getName())
    })

    it('should have one rental', function () {

        assert.equal(1, customer.getRentals().length)
    })

    it('should return 9 total amount', function () {

        assert.equal(9, customer.getTotalAmount());
    });

    it('should return 2 total amount', function () {

        assert.equal(2, customer.getTotalPoints());
    });


});