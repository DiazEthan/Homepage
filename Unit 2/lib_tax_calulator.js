class savingIncome {
    constructor(balance, rate, fee) {
        this.balance = balance;
        this.rate = rate;
        this.fee = fee;
    }
    calculateFee() {
        const balanceFee = this.balance * this.fee;
        return balanceFee;
    }
    totalEarn() {
        const savingEarn = this.balance * this.rate
        const balanceFee = this.calculateFee();
        const total = (this.balance + savingEarn) - balanceFee;
        return total;
    }
}