class BankAccount {
    constructor(accountNumber, accountHolder, balance) {
        this.accountNumber = accountNumber
        this.accountHolder = accountHolder
        this.balance = balance
    }
    deposit(amount) {
        if (amount <= 0) {
            console.log("You can only deposite a 1 or higher number");
        }
        this.balance += amount
    }
    withdraw(amount) {
        if (amount > this.balance) {
            console.log("You cannot withdraw more than you have")
        } else if (amount <= 0) {
            console.log("You can only withdraw a 1 or higher number");
        } else {
            this.balance -= amount
        }
    }
    displayAccountInfo() {
        console.log(`Account Number: ${this.accountNumber}`)
        console.log(`Account Holder: ${this.accountHolder}`)
        console.log(`Balance: $${this.balance}`)
    }
    transferFunds(amount, targetAccount) {
        // Ensure the current account has enough balance before proceeding with the transfer.
        if (amount > this.balance) {
            console.log("You dont have enough funds")
        } else {
            this.balance -= amount;
            targetAccount.balance += amount;
            console.log(`Transfered $${amount} to account number : ${targetAccount.accountNumber}`)
        }
    }
    static compareAccounts(accountA, accountB) {
        if (accountB.balance > accountA.balance) {
            console.log(`${accountB.accountHolder}s account has more balance than ${accountA.accountHolder}s`)
        } else if (accountA.balance > accountB.balance) {
            console.log(`${accountA.accountHolder}s account has more balance than ${accountB.accountHolder}s`)
        } else {
            console.log(`Both accounts have an equal balance`)
        }
    }

}
const account1 = new BankAccount("123456", "John Doe", 1000);
const account2 = new BankAccount("789012", "Jane Smith", 500);

account1.deposit(200); // Balance: 1200
account1.withdraw(300); // Balance: 900
console.log("--------------------------")
account1.displayAccountInfo();
console.log("--------------------------")
account1.transferFunds(400, account2);
account1.displayAccountInfo();
console.log("--------------------------")
account2.displayAccountInfo();
console.log("--------------------------")
BankAccount.compareAccounts(account1, account2);