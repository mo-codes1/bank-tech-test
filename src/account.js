class Account {

  constructor() {
    this.balance = 0
    this.amount = this.balance
    this.transactionHistory = []
  }

  getBalance() {
    return this.amount
  }


 
  printStatement(){
    console.log (
      "date || credit || debit || balance"
    )
    return this.amount
  }

}






const account = new Account();




module.exports = Account;