const Account = require('./account');

describe('Bank', () => {
  const account = new Account();

  it('returns the default balance', () => {
    expect(account.getBalance()).toBe(0);
  });

});