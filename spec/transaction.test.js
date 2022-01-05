const Transaction = require('../src/transaction');

describe('Transaction', () => {
  describe('addTransaction', () => {
    it('value of newBalance increases if transaction action is to deposit', () => {
      transaction = new Transaction(0, "deposit", 1000);
      expect(transaction.newBalance).toEqual(1000);
    });
    it('value of newBalance decreases if transaction action is to withdraw', () => {
      transaction = new Transaction(1000, "withdrawal", 500);
      expect(transaction.newBalance).toEqual(500);
    });
  });
});