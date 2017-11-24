'use strict';

(function(exports) {
  function Account() {
    this._balance = 0;
  }

  Account.prototype.balance = function() {
    return this._balance;
  };

  Account.prototype.deposit = function(amount, date) {
    this._balance += amount;
  }

  Account.prototype.withdrawal = function(amount, date) {
    if(amount > this._balance){
     return "Insufficient funds";
   }
    this._balance -= amount;
  }

  exports.Account = Account;
})(this);
