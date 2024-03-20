class Account {
    constructor(checking, saving, debt) {
        this.checking = checking
        this.saving = saving
        this.debt = debt
    }
    getTotal() {
        const netMoney = (this.checking + this.saving) - this.debt
        return netMoney
    }
    

}