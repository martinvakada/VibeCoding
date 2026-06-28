import { useEffect, useState } from "react";

import {
    getTransactions,
    getAnalytics
} from "../services/api";

const useTransactions = () => {

    const [transactions, setTransactions] = useState([]);
    const [analytics, setAnalytics] = useState({});
    const [loading, setLoading] = useState(true);

    const loadData = async () => {

        try {

            const transactionData = await getTransactions();
            const analyticsData = await getAnalytics();

            setTransactions(transactionData);
            setAnalytics(analyticsData);

        } catch (error) {

            console.log(error);

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {
        loadData();
    }, []);

    return {
        transactions,
        analytics,
        loading,
        refresh: loadData
    };

};

export default useTransactions;