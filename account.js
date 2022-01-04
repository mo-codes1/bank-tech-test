class Account {

  constructor() {
    this.balance = 0
    this.amount = this.balance
  }

  getBalance() {
    return this.amount
  }

}
const account = new Account();




module.exports = Account;