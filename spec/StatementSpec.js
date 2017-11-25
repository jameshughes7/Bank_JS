'use strict';

describe('Statement', function() {
var statement;

  beforeEach(function() {
      statement = new Statement;
  });

  it('should print the headings of the statement', function() {
    expect(statement.print_balance.length).toEqual(0);
  });
});
