let assert = require('assert');
let Summary = require('../app/domain/summary/summary');
let Rental = require('../app/domain/rental/rental');
const Customer = require('../app/domain/customer/customer');
const NewRelease = require('../app/domain/movie/types/newRealese');
const Children = require('../app/domain/movie/types/children');
const Regular = require('../app/domain/movie/types/regular');

describe('VideoStore', function () {
	let rentalStatement;
	beforeEach('initialize common variables', function () {
		summary = new Summary();
	});
	
	
	it('test single NewRelease', function () {

        let customer = new Customer("Customer");
        let newRealese = new NewRelease("NewRelease");
        let daysRented = 3;
        let rental = new Rental(newRealese, daysRented);

		customer.addRental(rental);

		assert.equal(9, customer.getTotalAmount(),"should be equal");
        assert.equal(2, customer.getTotalPoints(),"should be equal");
	});
	
	it('test dual NewRelease', function () {

        let customer = new Customer("Customer");
        let daysRented = 3;


        let newRealese_1 = new NewRelease("newRealese_1");
        let rental_1 = new Rental(newRealese_1, daysRented);

        let newRealese_2 = new NewRelease("newRealese_2");
        let rental_2 = new Rental(newRealese_2, daysRented);

        customer.addRental(rental_1);
        customer.addRental(rental_2);

        assert.equal(18, customer.getTotalAmount(),"should be equal");
        assert.equal(4, customer.getTotalPoints(),"should be equal");
	});
	
	it('test single children', function () {

        let customer = new Customer("Customer");
        let children = new Children("Children");
        let daysRented = 3;
        let rental = new Rental(children, daysRented);


        customer.addRental(rental);

        assert.equal(1.5, customer.getTotalAmount(),"should be equal");
        assert.equal(1, customer.getTotalPoints(),"should be equal");

	});
	
	it('test multiple regular', function () {

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


        assert.equal(7.5, customer.getTotalAmount(),"should be equal");
        assert.equal(3, customer.getTotalPoints(),"should be equal");
	});

    it('test multiple regular statement', function () {

        let customer = new Customer("Customer");

        let regular_1 = new Regular("Regular_1");
        let daysRented_1 = 1;
        let rental_1 = new Rental(regular_1, daysRented_1);

        let regular_2 = new Regular("Regular_2");
        let daysRented_2 = 2;
        let rental_2 = new Rental(regular_2, daysRented_2);

        let regular_3 = new Regular("Regular_3");
        let daysRented_3 = 3;
        let rental_3 = new Rental(regular_3, daysRented_3);

        customer.addRental(rental_1);
        customer.addRental(rental_2);
        customer.addRental(rental_3);

        assert.equal("Rental Record for Customer\n" +
            "\tRegular_1\t2\n\tRegular_2\t2\n" +
            "\tRegular_3\t3.5\n" +
            "You owed 7.5\nYou earned 3 frequent renter points \n",
            summary.makeStatement(customer),
            'The statements for *multiple regular rentals* should be equal')
    });
});

