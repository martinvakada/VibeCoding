// backend/services/categoryService.js

const categoryKeywords = {
    Food: [
        "zomato",
        "swiggy",
        "dominos",
        "pizza",
        "kfc",
        "burger",
        "restaurant",
        "food",
        "cafe",
        "starbucks",
        "mcdonald"
    ],

    Travel: [
        "uber",
        "ola",
        "rapido",
        "irctc",
        "metro",
        "flight",
        "bus",
        "train",
        "fuel",
        "petrol",
        "diesel"
    ],

    Salary: [
        "salary",
        "credited",
        "payroll",
        "income",
        "bonus",
        "incentive"
    ]
};

export const detectCategory = (message) => {

    const text = message.toLowerCase();

    for (const category in categoryKeywords) {

        const keywords = categoryKeywords[category];

        for (const keyword of keywords) {

            if (text.includes(keyword)) {
                return category;
            }

        }
    }

    return "Miscellaneous";
};

export const updateCategory = (transaction, newCategory) => {

    transaction.category = newCategory;

    return transaction;
};

export default {
    detectCategory,
    updateCategory
};