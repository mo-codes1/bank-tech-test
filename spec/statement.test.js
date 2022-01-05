const Statement = require('../src/statement');

describe('Statement', () => {
  describe('print', () => {
    it('prints the statement with the necessary headings', () => {
      const consoleSpy = jest.spyOn(console, 'log');
      console.log("date || credit || debit || balance")
      expect(consoleSpy).toHaveBeenCalledWith("date || credit || debit || balance");
    })

  })
});