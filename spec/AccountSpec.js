'use strict'

describe ('Account', function() {
var account;

  beforeEach(function() {
    account = new Account;
  });

  it('should intialize with a zero balance', function() {
    expect(account.balance()).toEqual(0);
  });

  it('should allow a deposit', function() {
    account.deposit(100,'24/11/2017');
    expect(account.balance()).toEqual(100);
  });

  it('should allow a withdrawal', function() {
    account.deposit(500,'24/11/2017');
    account.withdrawal(100,'24/11/2017');
    expect(account.balance()).toEqual(400);
  });

  it('withdrawal prevented if insufficient funds', function() {
    expect(account.withdrawal(100,'24/11/2017')).toEqual("Insufficient funds");
  });
});
