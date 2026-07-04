import { useEffect, useState } from "react";
import {
  getTransactions,
  getAnalytics,
  updateCategory,
} from "../services/api";

const useTransactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [analytics, setAnalytics] = useState({
    Food: 0,
    Travel: 0,
    Salary: 0,
    Miscellaneous: 0,
  });

  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    try {
      setLoading(true);

      const transactionData = await getTransactions();
      const analyticsData = await getAnalytics();

      setTransactions(transactionData);
      setAnalytics(analyticsData);
    } catch (error) {
      console.error("Error loading transactions:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const changeCategory = async (id, category) => {
    try {
      await updateCategory(id, category);

      loadData();
    } catch (error) {
      console.error(error);
    }
  };

  return {
    transactions,
    analytics,
    loading,
    changeCategory,
  };
};

export default useTransactions;