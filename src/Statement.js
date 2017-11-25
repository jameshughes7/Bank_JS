'use strict';

(function(exports) {
  function Statement() {
    this.transactionRecords = [];
  }

  Statement.prototype.printStatement = function() {
    return this.transactionRecords;
  };

  Statement.prototype.printTransactions = function(date, type, amount) {
    this.transactionRecords.push({date: date, type: type, amount: amount})
  };

  exports.Statement = Statement;
})(this);
