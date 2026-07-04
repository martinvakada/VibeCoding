import Transaction from "../models/transactionModel.js";

const transactions = [

    new Transaction(
        1,
        "Paid Rs.250 to Zomato",
        -250
    ),

    new Transaction(
        2,
        "Paid Rs.520 to Uber",
        -520
    ),

    new Transaction(
        3,
        "Received Rs.45000 from ABC Pvt Ltd Salary",
        45000
    ),

    new Transaction(
        4,
        "Paid Rs.180 to Swiggy Cashback",
        -180
    ),

    new Transaction(
        5,
        "Paid Rs.600 to Amazon",
        -600
    )

];

export default transactions;