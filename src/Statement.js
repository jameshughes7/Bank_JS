'use strict';

(function(exports) {
  function Statement() {
    var transaction_records = [];
  }

  Statement.prototype.print_balance = function() {
    return this.transaction_records;
  };

  exports.Statement = Statement;
})(this);
