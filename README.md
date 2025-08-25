Perfect idea 🙌 Having a *README.md* makes your project look professional.
Here’s a clean and simple *README.md* for your *Expense Tracker CLI Project* 👇

---

markdown
# 💰 Expense Tracker CLI

A simple command-line **Expense Tracker** built with **Node.js**.  
You can add, list, delete, and check total expenses – all stored in a JSON file.

---

## 🚀 Features
- Add new expenses with category  
- List all expenses with date  
- Show total expenses  
- Delete expenses by ID  
- Filter expenses by category  

---

## 📂 Project Structure


expense-tracker/
┣ index.js        # Main CLI commands
┣ storage.js      # Handles read/write to expenses.json
┣ expenses.json   # Stores your expenses
┗ package.json    # Node.js project setup

`

---

## ⚡ Installation
1. Clone the repo:
   sh
   git clone https://github.com/shrenigohel/expense-tracker.git
`

2. Navigate to project folder:

   sh
   cd expense-tracker
   
3. Install dependencies (none required for now, just Node.js).

---

## 📝 Usage

### Add Expense

sh
node index.js add <amount> <category>


Example:

sh
node index.js add 200 food


### List Expenses

sh
node index.js list


### List Expenses by Category

sh
node index.js list food


### Show Total Expenses

sh
node index.js total


### Delete Expense

sh
node index.js delete <id>


Example:

sh
node index.js delete 2


---

## ✅ Example Output


$ node index.js add 200 food
✅ Added: 200 in food

$ node index.js list
1. ₹200 - food (2025-08-25)

$ node index.js total
💵 Total spent: ₹200


---

