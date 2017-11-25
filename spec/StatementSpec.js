'use strict';

describe('Statement', function() {
var statement;

  beforeEach(function() {
      statement = new Statement;
  });

  it('should print the headings of the statement', function() {
    expect(statement.printStatement.length).toEqual(0);
  });

  it('should print transactions', function() {
    statement.printTransactions('31/10/2007', "Deposit", 100);
    expect(statement.printStatement()).toEqual([{date: '31/10/2007',type: "Deposit", amount: 100}]);
  });
});
