const Transaction = require("./transaction");

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

  printStatement() {
    console.log(
      "date || credit || debit || balance"
    );
    this.transactionHistory.forEach(transaction => {
      console.log(
        `${transaction.date} || ${(transaction.transactionAction == "deposit") ? transaction.transactionValue: ""} || ${(transaction.transactionAction == "withdrawal") ? transaction.transactionValue: ""} || ${transaction.newBalance}`
        
      )
    });
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

module.exports = Account;