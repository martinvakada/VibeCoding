// backend/services/cashbackService.js

const cashbackRules = {
    Food: 0.10,          // 10%
    Travel: 0.05,        // 5%
    Salary: 0.00,        // No cashback
    Miscellaneous: 0.02  // 2%
};

export const calculateCashback = (amount, category, type) => {

    // Cashback only on debit transactions
    if (type === "credit") {
        return 0;
    }

    const percentage = cashbackRules[category] || 0;

    const cashback = amount * percentage;

    return Number(cashback.toFixed(2));
};

export const getCashbackRate = (category) => {
    return cashbackRules[category] || 0;
};

export default {
    calculateCashback,
    getCashbackRate
};