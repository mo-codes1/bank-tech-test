const Statement = require('../src/statement');

describe('Statement', () => {
  describe('print', () => {
    statement = new Statement();
    it('prints the statement with all recent transactions', () => {
      const consoleSpy = jest.spyOn(console, 'log');
      console.log("date || credit || debit || balance")
      expect(consoleSpy).toHaveBeenCalledWith("date || credit || debit || balance");
    })

  })
});