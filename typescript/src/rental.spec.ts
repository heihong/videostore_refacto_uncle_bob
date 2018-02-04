import { Movie  } from './movie';
import { Rental } from './rental';

describe('VideoStore: Rental', () => {
    describe('computeAmount()', () => {
        given()
            .aNewReleaseMovie()
            .withDaysRentedIn(0, 1, 2, 3, 4, 8)
            .expectRentalAmountToBe(0, 3, 6, 9, 12, 24);

        given()
            .aChildrenMovie()
            .withDaysRentedIn(0, 1, 2, 3)
            .expectRentalAmountToBe(1.5);

        given()
            .aChildrenMovie()
            .withDaysRentedIn(4, 5, 6)
            .expectRentalAmountToBe(3, 4.5, 6);

        given()
            .aRegularMovie()
            .withDaysRentedIn(0, 1, 2)
            .expectRentalAmountToBe(2);

        given()
            .aRegularMovie()
            .withDaysRentedIn(3, 4, 8)
            .expectRentalAmountToBe(3.5, 5, 11);
    });

    describe('computePoints()', () => {
        given()
            .aRegularMovie()
            .withDaysRentedIn(0, 1, 2, 5)
            .expectRentalPointsToBe(1);

        given()
            .aChildrenMovie()
            .withDaysRentedIn(0, 1, 2, 5)
            .expectRentalPointsToBe(1);

        given()
            .aNewReleaseMovie()
            .withDaysRentedIn(0, 1)
            .expectRentalPointsToBe(1);

        given()
            .aNewReleaseMovie()
            .withDaysRentedIn(2, 5)
            .expectRentalPointsToBe(2);
    });

    function given() {
        class Given {
            static aChildrenMovie() {
                return new Given(Movie.CHILDREN, 'children');
            }

            static aNewReleaseMovie() {
                return new Given(Movie.NEW_RELEASE, 'new release');
            }

            static aRegularMovie() {
                return new Given(Movie.REGULAR, 'regular');
            }

            protected constructor(
                protected readonly priceCode: number,
                protected readonly label: string,
            ) {}

            withDaysRentedIn(...allDaysRented: number[]) {
                return new Then(this.priceCode, this.label, allDaysRented);
            }
        }

        class Then extends Given {
            constructor(
                protected readonly priceCode: number,
                protected readonly label: string,
                protected readonly allDaysRented: number[],
            ) {
                super(priceCode, label);
            }

            expectRentalAmountToBe(...expected: number[]) {
                this.expect(sut => sut.computeAmount(), expected);
            }

            expectRentalPointsToBe(...expected: number[]) {
                this.expect(sut => sut.computePoints(), expected);
            }

            private expect(computeResult: (sut: Rental) => number, allExpected: number[]) {
                describe(`given a ${this.label} movie`, () => {
                    this.allDaysRented.forEach((daysRented, index) => {
                        const expected = allExpected[Math.min(index, allExpected.length - 1)];
                        it(`should return ${expected} given ${daysRented} day(s) rented`, () => {
                            const sut = new Rental(new Movie('', this.priceCode), daysRented);
                            const result = computeResult(sut);
                            expect(result).toBe(expected);
                        });
                    });
                });
            }
        }

        return Given;
    }
});
