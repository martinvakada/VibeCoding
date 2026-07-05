import express from "express";
import transactions from "../data/transactions.js";

const router = express.Router();

// GET all transactions
router.get("/", (req, res) => {
    res.json(transactions);
});

// GET analytics
router.get("/analytics", (req, res) => {

    const analytics = {
        Food: 0,
        Travel: 0,
        Salary: 0,
        Miscellaneous: 0,
    };

    transactions.forEach((transaction) => {
        analytics[transaction.category] += transaction.amount;
    });

    res.json(analytics);
});

export default router;