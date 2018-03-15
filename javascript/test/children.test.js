let assert = require('assert');

const Customer = require('../app/domain/customer/customer');
const Children = require('../app/domain/movie/types/children');
let Rental = require('../app/domain/rental/rental');

describe('Test class Children when you rent one movie for 3 day', function () {
    let customer, children, daysRented, rental;

    beforeEach(()=> {
        customer = new Customer("Customer");
        children = new Children("Children");
        daysRented = 3;
        rental = new Rental(children, daysRented);
        customer.addRental(rental);
    });

    it('should return 1.5 amount', function () {

        assert.equal(1.5, children.getAmount());

    });

    it('should return 1 point', function () {

        assert.equal(1, children.getPoints());

    });

    it('should return 1.5 total amount', function () {

        assert.equal(1.5, customer.getTotalAmount());

    });

    it('should return 1 total point', function () {

        assert.equal(1, customer.getTotalPoints());

    });


});