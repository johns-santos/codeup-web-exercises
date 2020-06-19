const account = {
    name: 'John Santos',
    expenses: [],
    addExpense: function(description, amount){
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function(){
        let totalExpenses = 0

        this.expenses.forEach(function (expense){
            totalExpenses = totalExpenses + expense.amount
        })
        
        return `${this.name} has $${totalExpenses} in expenses.`
    }
}

// Expense -> description(string) amount(num)
// addExpense -> description, amount
// getAccountSummary -> total up all expenses -> John Santos has $1250 in expenses.

account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
console.log(account.getAccountSummary())