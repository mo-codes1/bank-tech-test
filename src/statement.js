class Statement {
   constructor(transactionHistory) {
     this.transactionHistory = transactionHistory
   }

   print() {
    console.log(
      "date || credit || debit || balance"
    );
    this.transactionHistory.forEach(transaction => {
      console.log(
        `${transaction.date} || ${(transaction.transactionAction == "deposit") ? transaction.transactionValue: ""} || ${(transaction.transactionAction == "withdrawal") ? transaction.transactionValue: ""} || ${transaction.newBalance}`
      )
    });
   }


}
module.exports = Statement