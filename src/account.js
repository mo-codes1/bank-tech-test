const Transaction = require("./transaction");
const Statement = require("./statement");
class Account {
  constructor(defaultBalance = 0) {
    this.amount = defaultBalance
    this.transactionHistory = []
  }

  getBalance() {
    return this.amount
  }

  getTransactionHistory() {
    return this.transactionHistory;
  }

  newTransaction(action, value) {
    let transaction = this.newTransactionAction(action, value);
    this.transactionHistory.push(transaction);
    this._refreshedBalance();
  }

  newTransactionAction(action, value) {
    return new Transaction(this.amount, action, value);
  }

  _refreshedBalance() {
    this.amount = this.getMostRefreshedBalance();
  }

  getMostRefreshedBalance() {
    return this.transactionHistory[this.transactionHistory.length - 1].newBalance;
  }
}
const account = new Account();
module.exports = Account;