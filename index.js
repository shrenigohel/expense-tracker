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

if (command === "list") {
  const expenses = loadExpenses();
  expenses.forEach((e, i) =>
    console.log(`${i + 1}. ₹${e.amount} - ${e.category} (${e.date.split("T")[0]})`)
  );
}

if (command === "total") {
  const expenses = loadExpenses();
  const total = expenses.reduce((sum, e) => sum + e.amount, 0);
  console.log(`Total spent: ₹${total}`);
}