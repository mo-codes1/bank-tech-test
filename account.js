class Account {

  constructor() {
    this.balance = 0
    this.amount = this.balance
  }

  getBalance() {
    return this.amount
  }

  addTransaction(action, value) {
    if(action === 'deposit') {
      this.amount += value;
    } else if(action === 'withdrawal') {
      this.amount -= value;
    }
  }

}
const account = new Account();




module.exports = Account;