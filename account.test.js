const Account = require('./account');

describe('Bank', () => {
  const account = new Account();

  it('returns the default balance', () => {
    expect(account.getBalance()).toBe(0);
  });

  it('adds the balance by 1000', () => {
    account.addTransaction('deposit', 1000);
    expect(account.getBalance()).toBe(1000);
  });

  it('withdraws the balance by 500', () => {
    account.addTransaction('withdrawal', 500);
    expect(account.getBalance()).toBe(500);
  });

});