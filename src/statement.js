class Statement {
   constructor(transactionHistory) {
     this.transactionHistory = transactionHistory
   }

   print() {
    console.log(
      "date || credit || debit || balance"
    );
    this.transactionHistory.reverse().forEach(transaction => {
      console.log(
        `${transaction.date} || ${(transaction.transactionAction == "deposit") ? transaction.transactionValue.toFixed(2) : ""} || ${(transaction.transactionAction == "withdrawal") ? transaction.transactionValue.toFixed(2) : ""} || ${transaction.newBalance.toFixed(2)}`
      )
    });
   }
}
module.exports = Statement