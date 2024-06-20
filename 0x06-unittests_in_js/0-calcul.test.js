// Create a test case
const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return 4 for inputs (1, 3)', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });
  it('should return 5 for inputs (1, 3, 7)', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });
  it('should return 5 for inputs (1.2, 3.7)', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });
  it('should return 6 for inputs(1.5, 3.7)', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });
  it('should return 3 for inputs(1.0, 2.0)', () => {
    assert.strictEqual(calculateNumber(1.0, 2.0), 3);
  });
  it('should return 5 for inputs(2.499999, 3.499999)', () => {
    assert.strictEqual(calculateNumber(2.499999, 3.499999), 5);
  });
});
