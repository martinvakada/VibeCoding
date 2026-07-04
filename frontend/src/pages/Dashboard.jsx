import Navbar from "../components/Navbar";
import AnalyticsBar from "../components/AnalyticsBar";
import TransactionCard from "../components/TransactionCard";
import useTransactions from "../hooks/useTransactions";
import "../styles/Dashboard.css";

const Dashboard = () => {
  const {
    transactions,
    analytics,
    loading,
    changeCategory,
  } = useTransactions();

  if (loading) {
    return (
      <div className="loading-container">
        <h2>Loading Transactions...</h2>
      </div>
    );
  }

  return (
    <div className="dashboard">

      <Navbar />

      <div className="dashboard-content">

        <AnalyticsBar analytics={analytics} />

        <div className="transaction-list">

          {transactions.length === 0 ? (
            <h3>No Transactions Found</h3>
          ) : (
            transactions.map((transaction) => (
              <TransactionCard
                key={transaction.id}
                transaction={transaction}
                onCategoryChange={changeCategory}
              />
            ))
          )}

        </div>

      </div>

    </div>
  );
};

export default Dashboard;