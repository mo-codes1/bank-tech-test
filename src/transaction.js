class Transaction {
  constructor(currentAmount, action, value) {
    this.transactionAction = action;
    this.transactionValue = value;
    this.newBalance = this.addTransaction(currentAmount, action, value);
    this.date = new Date().toLocaleString().substring(0,10);;
  }

  addTransaction(currentAmount, action, value) {
    if (action === 'deposit') {
      return currentAmount + value;
    } else if (action === 'withdrawal') {
      return currentAmount - value;
    }
  }
}
module.exports = Transaction;