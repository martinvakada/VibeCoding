import CategoryDropdown from "./CategoryDropdown";
import CashbackBadge from "./CashbackBadge";

const TransactionCard = ({ transaction, onCategoryChange }) => {
  const {
    id,
    message,
    amount,
    category,
    type,
    expectedSavings,
  } = transaction;

  return (
    <div className="transaction-card">

      <div className="transaction-top">

        <div>
          <div className="transaction-message">
            {message}
          </div>
        </div>

        <div
          className={`transaction-amount ${
            type === "Credit" ? "credit" : "debit"
          }`}
        >
          ₹{amount}
        </div>

      </div>

      <div className="transaction-bottom">

        <CategoryDropdown
          category={category}
          onChange={(newCategory) =>
            onCategoryChange(id, newCategory)
          }
        />

        {expectedSavings > 0 && (
          <CashbackBadge amount={expectedSavings} />
        )}

      </div>

    </div>
  );
};

export default TransactionCard;