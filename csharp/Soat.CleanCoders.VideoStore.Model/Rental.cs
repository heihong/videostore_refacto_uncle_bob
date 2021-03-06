﻿namespace Soat.CleanCoders.VideoStore.Model
{
    public class Rental
    {
        public int DaysRented { get; }
        public virtual Movie Movie { get; }

        public Rental(Movie movie, int daysRented)
        {
            this.Movie      = movie;
            this.DaysRented = daysRented;
        }
    }
}
