let assert = require('assert');
let Report = require('../app/domain/report/report');
let Rental = require('../app/domain/rental/rental');
const Customer = require('../app/domain/customer/customer');
const Regular = require('../app/domain/movie/types/regular');

describe('Report', function () {
    let report, customer, regular_1, daysRented_1, rental_1, regular_2, daysRented_2,
        rental_2, regular_3, daysRented_3, rental_3;

    beforeEach('initialize common variables', function () {

        customer = new Customer("Customer");

        report = new Report(customer);

        regular_1 = new Regular("Regular_1");
        daysRented_1 = 1;
        rental_1 = new Rental(regular_1, daysRented_1);

        regular_2 = new Regular("Regular_2");
        daysRented_2 = 2;
        rental_2 = new Rental(regular_2, daysRented_2);

        regular_3 = new Regular("Regular_3");
        daysRented_3 = 3;
        rental_3 = new Rental(regular_3, daysRented_3);

        customer.addRental(rental_1);
        customer.addRental(rental_2);
        customer.addRental(rental_3);
    });

    it('test makeHeader', function () {
        assert.equal("Rental Record for Customer\n",
            report.makeHeader(),
            'should be equal')
    });

    it('test makeContainer', function () {

        assert.equal("\tRegular_1\t2\n\tRegular_2\t2\n" +
            "\tRegular_3\t3.5\n",
            report.makeContainer(),
            'should be equal')
    });

    it('test makeFooter', function () {
        assert.equal(
            "You owed 7.5\n" +
            "You earned 3 frequent renter points \n",
            report.makeFooter(),
            'should be equal')
    });

    it('test makeStatement', function () {
        assert.equal("Rental Record for Customer\n" +
            "\tRegular_1\t2\n\tRegular_2\t2\n" +
            "\tRegular_3\t3.5\n" +
            "You owed 7.5\nYou earned 3 frequent renter points \n",
            report.makeStatement(),
            'should be equal')
    });
});

