const express = require("express");

const {
    getTransactions,
    createTransaction,
    updateCategory,
    getAnalytics
} = require("../controllers/transactionController");

const router = express.Router();

router.get("/", getTransactions);

router.post("/", createTransaction);

router.patch("/:id/category", updateCategory);

router.get("/analytics", getAnalytics);

module.exports = router;