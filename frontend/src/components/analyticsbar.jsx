const AnalyticsBar = ({ analytics }) => {
  const categories = [
    "Food",
    "Travel",
    "Salary",
    "Miscellaneous",
  ];

  const maxValue = Math.max(...Object.values(analytics), 1);

  return (
    <div className="analytics-container">

      <h2>Spending Analytics</h2>

      {categories.map((category) => {
        const amount = analytics[category] || 0;

        const width = (amount / maxValue) * 100;

        return (
          <div
            key={category}
            className="analytics-item"
          >
            <div className="analytics-header">
              <span>{category}</span>
              <span>₹{amount}</span>
            </div>

            <div className="progress-bar">

              <div
                className="progress-fill"
                style={{
                  width: `${width}%`
                }}
              />

            </div>

          </div>
        );
      })}
    </div>
  );
};

export default AnalyticsBar;