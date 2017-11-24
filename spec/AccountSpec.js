'use strict'

describe ('Account', function() {
var account;

  beforeEach(function() {
    account = new Account;
  });

  it('should intialize with a zero balance', function() {
    expect(account.balance()).toEqual(0);
  });


});
