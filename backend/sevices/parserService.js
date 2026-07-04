// backend/services/parserService.js

const amountRegex = /(?:Rs\.?|INR|₹)\s?(\d+(?:\.\d+)?)/i;

export const extractAmount = (message) => {
    const match = message.match(amountRegex);

    if (!match) return 0;

    return Number(match[1]);
};

export const getTransactionType = (message) => {
    const text = message.toLowerCase();

    if (
        text.includes("credited") ||
        text.includes("received") ||
        text.includes("deposit") ||
        text.includes("salary")
    ) {
        return "credit";
    }

    return "debit";
};

export const normalizeMessage = (message) => {
    return message
        .trim()
        .replace(/\s+/g, " ");
};

export const parseTransaction = (message) => {
    const normalizedMessage = normalizeMessage(message);

    return {
        message: normalizedMessage,
        amount: extractAmount(normalizedMessage),
        type: getTransactionType(normalizedMessage)
    };
};