import express from "express";
import cors from "cors";

import transactionRoutes from "./routes/TransactionRoutes.js";
import errorHandler from "./middlewares/errorHandler.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/transactions", transactionRoutes);

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Bank Transaction API Running"
    });
});

app.use(errorHandler);

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});