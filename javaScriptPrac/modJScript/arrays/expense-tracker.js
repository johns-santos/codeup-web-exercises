/* ========================================
-  Expense -> description(string) amount(num)
- addExpense -> description, amount
- getAccountSummary -> total up all expenses -> John Santos has $1250 in expenses.
========================================= */

const account = {
    name: 'John Santos',
    expenses: [],
    income: [],
    addExpense: function(description, amount){
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    addIncome: function(description, amount){
        this.income.push({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function(){
        let totalExpenses = 0;
        let totalIncome = 0;
        let accountBalance = 0;

        this.expenses.forEach(function (expense){
            totalExpenses = totalExpenses + expense.amount
        })
        this.income.forEach(function (income){
            totalIncome = totalIncome + income.amount
        })

        accountBalance = totalIncome - totalExpenses;

        return `${this.name} has a blance of $${accountBalance}. $${totalIncome} in income and $${totalExpenses} in expenses.`
    }
}

/* ===============================
 CHALLENGE ------
==================================

 STEPS
 1. Add income array to account
 2. addIncome method -> description, amount
 3. Tweak getAccountSummary

OUTPUT:  John Santos has a balance of $10. $100 in income. $90 in expenses
================================== */

account.addExpense('Rent', 990)
account.addExpense('Office Supplies', 100)
account.addIncome('Job', 1000)
account.addIncome('Rental Property', 1500)
console.log(account.getAccountSummary())