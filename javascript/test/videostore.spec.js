let assert = require('assert');
let Customer = require('../app/domain/customer');
let Rental = require('../app/domain/rental');
let Movie = require('../app/domain/movie');
let MovieType = require('../app/domain/movie').MovieType;

describe('VideoStore', function () {
	let customer;
	
	beforeEach('initialize common variables', function () {
		customer = new Customer('Fred');
	});
	
	
	it('test single NewRelease statement', function () {
		customer.addRental(new Rental(new Movie("The Cell", MovieType.NEW_RELEASE), 3));
		
		assert.equal("Rental Record for Fred\n\tThe Cell\t9.0\nYou owed 9.0\nYou earned 2 frequent renter points \n", customer.statement(), 'The statements for *single new release rental* should be equal')
	});
	
	it('test dual NewRelease statement', function () {
		customer.addRental(new Rental(new Movie("The Cell", MovieType.NEW_RELEASE), 3));
		customer.addRental(new Rental(new Movie("The Tigger Movie", MovieType.NEW_RELEASE), 3));
		
		assert.equal("Rental Record for Fred\n\tThe Cell\t9.0\n\tThe Tigger Movie\t9.0\nYou owed 18.0\nYou earned 4 frequent renter points \n", customer.statement(), 'The statements for *dual new release rentals* should be equal')
	});
	
	it('test single children statement', function () {
		customer.addRental(new Rental(new Movie("The Tigger Movie", MovieType.CHILDREN), 3));
		assert.equal("Rental Record for Fred\n\tThe Tigger Movie\t1.5\nYou owed 1.5\nYou earned 1 frequent renter points \n", customer.statement(), 'The statements for *single children rental* should be equal')
	});
	
	it('test multiple regular statement', function () {
		customer.addRental(new Rental(new Movie("Plan 9 from Outer Space", MovieType.REGULAR), 1));
		customer.addRental(new Rental(new Movie("8 1/2", MovieType.REGULAR), 2));
		customer.addRental(new Rental(new Movie("Eraserhead", MovieType.REGULAR), 3));
		
		assert.equal("Rental Record for Fred\n\tPlan 9 from Outer Space\t2.0\n\t8 1/2\t2.0\n\tEraserhead\t3.5\nYou owed 7.5\nYou earned 3 frequent renter points \n", customer.statement(), 'The statements for *multiple regular rentals* should be equal')
	});
	
	
	
});

