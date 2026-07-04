class Transaction {

    constructor(
        id,
        message,
        amount,
        category = "Miscellaneous",
        expectedSavings = 0
    ) {
        this.id = id;
        this.message = message;
        this.amount = amount;
        this.category = category;
        this.expectedSavings = expectedSavings;
    }

}

export default Transaction;