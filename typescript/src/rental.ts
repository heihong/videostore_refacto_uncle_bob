import { Movie }  from './movie';
import { Pricer } from './pricers/pricer';

export class Rental {
    constructor(
        private readonly movie: Movie,
        private readonly pricer: Pricer,
    ) { }

    computeAmount() {
        return this.pricer.computeAmount();
    }

    computePoints() {
        return this.pricer.computePoints();
    }

    getMovieTitle() {
        return this.movie.title;
    }
}