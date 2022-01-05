const Account = require('../src/account');

describe('Account', () => {

  describe('printStatement', () => {
    account = new Account();
    it('prints the statement with all recent transactions', () => {
      expect(account.printStatement(console.log)).toEqual("date || credit || debit || balance")
    })
  })
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