const Transaction = require("./transaction");
const Statement = require("./statement")

class Account {
  constructor(defaultBalance = 0) {
    this.amount = defaultBalance
    this.transactionHistory = []
  }

  getBalance() {
    return this.amount.toFixed(2);
  }

  getTransactionHistory() {
    return this.transactionHistory;
  }
  printStatement() {
    new Statement(this.transactionHistory).print()
  }
  
  newTransaction(action, value) {
    let transaction = this.newTransactionAction(action, value);
    this.transactionHistory.push(transaction);
    this.refreshedBalance();
  }

  newTransactionAction(action, value) {
    return new Transaction(this.amount, action, value);
  }

  refreshedBalance() {
    this.amount = this.getMostRefreshedBalance();
  }

  getMostRefreshedBalance() {
    return this.transactionHistory[this.transactionHistory.length - 1].newBalance;
  }
}
module.exports = Account;