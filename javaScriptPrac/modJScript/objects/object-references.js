let myAccount = {
    name: 'John Santos',
    expenses: 0,
    income: 0
};

let bellaAccount = {
    name: 'Bella Santos',
    expenses: 0,
    income: 0
};

let addExpense = function (account, amount){
    account.expenses = account.expenses + amount;
    console.log(account)
};

addExpense(myAccount, 2.50); // This will reference the object in stored  memory.
console.log(myAccount); // Now myAccount is changed and updated by addExpense function

console.log('====== Bad Solution/ Will not clear object property=======');
// Bad solution
let addExpense2 = function (account, amount){
    account = {}; // assignment operator -- empty object
    // account.expenses = account.expenses + amount;
    console.log(account)
};
addExpense2(myAccount, 2.50); // This will reference the object in stored  memory.
console.log(myAccount);



console.log('====== Good Solution will clear object property=======');
// GOOD solution
let newAccount = myAccount;
newAccount.income = 1000;
newAccount = {};

let addExpense3 = function (account, amount){
    account.expenses = account.expenses + amount;
};
addExpense3(myAccount, 2.50); // This will reference the object in stored  memory.
console.log(myAccount);



//==================================================================
//==================================================================
//==================================================================
// Challenge  - three functions
// addIncome - take account and add new income
// resetAccount - reset account to zero
// getAccountSummary - account balance and total expense and income
// Account for John has $900. $1000 in income. $100 in expense
console.log(" ======== new Summary =======");
// * addIncome
let addIncome = function (account, income){
    account.income = account.income + income;
};

// * addExpense
let addExpense4 = function (account, amount){
    account.expenses = account.expenses + amount;
};

// * resetAccount
let resetAccount = function (account){
account.expenses = 0;
account.income = 0;
};
console.log(resetAccount(myAccount));

// * getAccountSummary
let getAccountSummary = function (account){
    let accountBalance = account.income - account.expenses;
    return `Account for ${account.name} has $${accountBalance}. $${account.income} in income. $${account.expenses} in expenses`;
};


addIncome(myAccount, 2000.00);
addExpense4(myAccount, 2.50);
addExpense4(myAccount, 160);

console.log(getAccountSummary(myAccount));




