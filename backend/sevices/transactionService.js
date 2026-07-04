// backend/services/transactionService.js

import transactions from "../data/transactions.js";
import { parseTransaction } from "./parserService.js";
import { detectCategory } from "./categoryService.js";
import { calculateCashback } from "./cashbackService.js";

/**
 * Return all transactions with
 * category and expected savings
 */
export const getAllTransactions = () => {

    return transactions.map((transaction) => {

        const parsed = parseTransaction(transaction.message);

        const category =
            transaction.category || detectCategory(parsed.message);

        const expectedSavings = calculateCashback(
            parsed.amount,
            category,
            parsed.type
        );

        return {
            ...transaction,
            amount: parsed.amount,
            type: parsed.type,
            category,
            expectedSavings
        };
    });

};

/**
 * Analytics grouped by category
 */
export const getAnalytics = () => {

    const analytics = {
        Food: 0,
        Travel: 0,
        Salary: 0,
        Miscellaneous: 0
    };

    const allTransactions = getAllTransactions();

    allTransactions.forEach((transaction) => {

        if (transaction.type === "debit") {
            analytics[transaction.category] += transaction.amount;
        }

    });

    return analytics;
};

/**
 * Create a new transaction
 */
export const addTransaction = (transaction) => {

    const parsed = parseTransaction(transaction.message);

    const category = detectCategory(parsed.message);

    const expectedSavings = calculateCashback(
        parsed.amount,
        category,
        parsed.type
    );

    const newTransaction = {
        id: Date.now(),
        message: parsed.message,
        amount: parsed.amount,
        type: parsed.type,
        category,
        expectedSavings
    };

    transactions.push(newTransaction);

    return newTransaction;
};

/**
 * Update transaction category
 */
export const updateTransactionCategory = (id, category) => {

    const transaction = transactions.find(
        (item) => item.id == id
    );

    if (!transaction) {
        return null;
    }

    transaction.category = category;

    const parsed = parseTransaction(transaction.message);

    transaction.expectedSavings = calculateCashback(
        parsed.amount,
        category,
        parsed.type
    );

    return transaction;
};

export default {
    getAllTransactions,
    getAnalytics,
    addTransaction,
    updateTransactionCategory
};