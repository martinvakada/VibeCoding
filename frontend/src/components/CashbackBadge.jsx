const CashbackBadge = ({ expectedSavings }) => {
  if (!expectedSavings || expectedSavings <= 0) {
    return null;
  }

  return (
    <div className="cashback-badge">
      <span> Expected Savings</span>
      <strong>₹{expectedSavings}</strong>
    </div>
  );
};

export default CashbackBadge;