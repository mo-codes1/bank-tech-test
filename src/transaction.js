class Transaction {

  constructor(currentAmount, action, value) {
  
  }

  addTransaction(currentAmount, action, value) {
    if(action === 'deposit') {
      return currentAmount + value;
    } else if(action === 'withdrawal') {
      return currentAmount - value;
    }
  }
}