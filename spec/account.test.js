const Account = require('../src/account');

describe('Account', () => {

  describe('getBalance', () => {
    account = new Account();
    it('gives back the most up to date balance', () => {
      account.newTransaction('deposit', 5);
      expect(account.getBalance()).toEqual(5);
    })
  })
  describe('newTransaction', () => {
    account = new Account();
    it('records the transaction type and value', () => {
      account.newTransaction('deposit', 1000);
      expect(account.getTransactionHistory().length).toEqual(2)
    })
  })
  
});