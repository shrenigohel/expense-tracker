console.log(" Welcome to Expense Tracker CLI!");
console.log("Commands: add, list, delete, total");

const { loadExpenses, saveExpenses } = require("./storage");
const command = process.argv[2];