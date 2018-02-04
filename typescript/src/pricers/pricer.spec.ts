import { Pricer }        from './pricer';
import { PricerFactory } from './pricer-factory';

describe('VideoStore: Pricer', () => {
    describe('computeAmount()', () => {
        given()
            .aNewReleaseMovie()
            .withDaysRentedIn(0, 1, 2, 3, 4, 8)
            .expectPricerAmountToBe(0, 3, 6, 9, 12, 24);

        given()
            .aChildrenMovie()
            .withDaysRentedIn(0, 1, 2, 3)
            .expectPricerAmountToBe(1.5);

        given()
            .aChildrenMovie()
            .withDaysRentedIn(4, 5, 6)
            .expectPricerAmountToBe(3, 4.5, 6);

        given()
            .aRegularMovie()
            .withDaysRentedIn(0, 1, 2)
            .expectPricerAmountToBe(2);

        given()
            .aRegularMovie()
            .withDaysRentedIn(3, 4, 8)
            .expectPricerAmountToBe(3.5, 5, 11);
    });

    describe('computePoints()', () => {
        given()
            .aRegularMovie()
            .withDaysRentedIn(0, 1, 2, 5)
            .expectPricerPointsToBe(1);

        given()
            .aChildrenMovie()
            .withDaysRentedIn(0, 1, 2, 5)
            .expectPricerPointsToBe(1);

        given()
            .aNewReleaseMovie()
            .withDaysRentedIn(0, 1)
            .expectPricerPointsToBe(1);

        given()
            .aNewReleaseMovie()
            .withDaysRentedIn(2, 5)
            .expectPricerPointsToBe(2);
    });

    function given() {
        class Given {
            static aChildrenMovie() {
                return new Given(PricerFactory.forChildrenMovies());
            }

            static aNewReleaseMovie() {
                return new Given(PricerFactory.forNewReleases());
            }

            static aRegularMovie() {
                return new Given(PricerFactory.forRegularMovies());
            }

            protected constructor(
                private readonly pricerFactory: PricerFactory,
            ) {}

            withDaysRentedIn(...allDaysRented: number[]) {
                return new Then(this.pricerFactory, allDaysRented);
            }
        }

        class Then {
            constructor(
                private readonly pricerFactory: PricerFactory,
                private readonly allDaysRented: number[],
            ) { }

            expectPricerAmountToBe(...expected: number[]) {
                this.expect(sut => sut.computeAmount(), expected);
            }

            expectPricerPointsToBe(...expected: number[]) {
                this.expect(sut => sut.computePoints(), expected);
            }

            private expect(computeResult: (sut: Pricer) => number, allExpected: number[]) {
                describe(`given a ${this.pricerFactory.movieType} movie`, () => {
                    this.allDaysRented.forEach((daysRented, index) => {
                        const expected = allExpected[Math.min(index, allExpected.length - 1)];
                        it(`should return ${expected} given ${daysRented} day(s) rented`, () => {
                            const sut = this.createSut(daysRented);
                            const result = computeResult(sut);
                            expect(result).toBe(expected);
                        });
                    });
                });
            }
            
            private createSut(daysRented: number) {
                return this.pricerFactory.create(daysRented);
            }
        }

        return Given;
    }
});
