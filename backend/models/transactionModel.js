class Transaction {

    constructor(
        id,
        message,
        merchant,
        amount,
        type,
        category,
        expectedSavings,
        date
    ) {

        this.id = id;
        this.message = message;
        this.merchant = merchant;
        this.amount = amount;
        this.type = type;
        this.category = category;
        this.expectedSavings = expectedSavings;
        this.date = date;
    }

}

module.exports = Transaction;