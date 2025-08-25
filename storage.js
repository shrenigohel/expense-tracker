// storage.js
const fs = require("fs");
const file = "expenses.json";

function loadExpenses() {
  if (!fs.existsSync(file)) return [];
  return JSON.parse(fs.readFileSync(file));
}

function saveExpenses(expenses) {
  fs.writeFileSync(file, JSON.stringify(expenses, null, 2));
}

module.exports = { loadExpenses, saveExpenses };