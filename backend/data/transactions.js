const transactions = [
  {
    id: 1,
    message: "Paid ₹250 to Zomato",
    amount: 250,
    type: "Debit",
    category: "Food",
    expectedSavings: 25
  },
  {
    id: 2,
    message: "Paid ₹450 to Uber",
    amount: 450,
    type: "Debit",
    category: "Travel",
    expectedSavings: 0
  },
  {
    id: 3,
    message: "Received ₹45000 from Infosys",
    amount: 45000,
    type: "Credit",
    category: "Salary",
    expectedSavings: 0
  },
  {
    id: 4,
    message: "Paid ₹1200 to Amazon Cashback",
    amount: 1200,
    type: "Debit",
    category: "Miscellaneous",
    expectedSavings: 120
  },
  {
    id: 5,
    message: "Paid ₹350 to Swiggy",
    amount: 350,
    type: "Debit",
    category: "Food",
    expectedSavings: 35
  }
];

export default transactions;