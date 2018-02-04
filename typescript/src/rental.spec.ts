import { Movie  } from './movie';
import { Rental } from './rental';

describe('VideoStore: Rental', () => {
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

            expectRentalPointsToBe(expected: number) {
                describe(`given a ${this.label} movie`, () => {
                    this.allDaysRented.forEach(daysRented => {
                        it(`should return ${expected} given ${daysRented} day(s) rented`, () => {
                            const sut = new Rental(new Movie('', this.priceCode), daysRented);
                            const result = sut.computePoints();
                            expect(result).toBe(expected);
                        });
                    });
                });
            }
        }

        return Given;
    }
});
