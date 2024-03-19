function BankAccount(accountNumber, name, type, balance) {
    this.accountNumber = accountNumber;
    this.name = name;
    this.type = type;
    this.balance = balance;
    this.active = true; 
}


BankAccount.prototype.deposit = function(amount) {
    if (amount > 0) {
        this.balance += amount;
        console.log(`Deposited ${amount} into account ${this.accountNumber}.`);
    } else {
        console.log("Invalid deposit amount.");
    }
}

BankAccount.prototype.withdraw = function(amount) {
    if (this.balance >= amount && amount > 0) {
        this.balance -= amount;
        console.log(`Withdrawn ${amount} from account ${this.accountNumber}.`);
    } else {
        console.log("Insufficient funds or invalid withdrawal amount.");
    }
}

BankAccount.prototype.checkBalance = function() {
    console.log(`Account ${this.accountNumber} balance: ${this.balance}.`);
}

BankAccount.prototype.isActive = function() {
    return this.active;
}


function getTotalBalance(accounts) {
    let totalBalance = 0;
    for (let account of accounts) {
        if (account.isActive()) {
            totalBalance += account.balance;
        }
    }
    return totalBalance;
}

let account1 = new BankAccount(1, "John", "Savings", 10000);
let account2 = new BankAccount(2, "Alice", "Checking", 50000);
let account3 = new BankAccount(3, "Bob", "Savings", 20000);


account1.deposit(500);
account2.withdraw(1000);
account3.deposit(1500);
account1.checkBalance();
account2.checkBalance();
account3.checkBalance();


console.log("Account 1 is active:", account1.isActive());
console.log("Account 2 is active:", account2.isActive());
console.log("Account 3 is active:", account3.isActive());


let allAccounts = [account1, account2, account3];
console.log("Total balance of all active accounts:", getTotalBalance(allAccounts));
