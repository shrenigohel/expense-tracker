console.log(" Welcome to Expense Tracker CLI!");
console.log("Commands: add, list, delete, total");

const { loadExpenses, saveExpenses } = require("./storage");
const command = process.argv[2];
if (command === "add") {
  const amount = parseFloat(process.argv[3]);
  const category = process.argv[4] || "misc";
  const expenses = loadExpenses();
  expenses.push({ amount, category, date: new Date().toISOString() });
  saveExpenses(expenses);
  console.log( `Added: ${amount} in ${category}`);
}