let assert = require('assert');

const Customer = require('../app/domain/customer/customer');
const NewRelease = require('../app/domain/movie/types/newRelease');
let Rental = require('../app/domain/rental/rental');

describe('Test class Rental', function () {

    let customer, newRealese, daysRented, rental;

    beforeEach(()=> {
        customer = new Customer('customer');
        newRealese = new NewRelease("NewRelease");
        daysRented = 3;
        rental = new Rental(newRealese, daysRented);

        customer.addRental(rental);
    });

    it('should return the title of the movie rented', function () {

        assert.equal('NewRelease', rental.getTitle())
    })

    it('should return 3 days rented', function () {

        assert.equal(3, rental.getDaysRented())
    })

    it('should return 9 amount', function () {

        assert.equal(9, rental.getAmount());
    });

    it('should return 2 point', function () {

        assert.equal(2, rental.getPoints());
    });


});