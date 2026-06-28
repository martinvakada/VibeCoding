import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5000/api/transactions"
});

// GET all transactions
export const getTransactions = async () => {
    const response = await api.get("/");
    return response.data;
};

// GET analytics
export const getAnalytics = async () => {
    const response = await api.get("/analytics");
    return response.data;
};

// Create transaction
export const createTransaction = async (transaction) => {
    const response = await api.post("/", transaction);
    return response.data;
};

// Update category
export const updateCategory = async (id, category) => {
    const response = await api.patch(`/${id}/category`, {
        category
    });

    return response.data;
};

export default api;