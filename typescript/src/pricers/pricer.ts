export abstract class Pricer {
    protected constructor(
        readonly daysRented: number,
        private readonly baseAmount: number,
        private readonly ratePerDay: number,
        private readonly minimumDays: number,
    ) {}

    computeAmount() {
        return this.baseAmount + this.computeLinearAmount();
    }

    private computeLinearAmount() {
        return Math.max(0, this.daysRented - this.minimumDays) * this.ratePerDay;
    }
    
    abstract computePoints(): number;
}