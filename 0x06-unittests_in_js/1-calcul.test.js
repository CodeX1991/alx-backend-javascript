// Create a test case
const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return 4 for inputs (SUM, 1, 3)', () => {
      assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
    });
    it('should return 5 for inputs (SUM, 1, 3.7)', () => {
      assert.strictEqual(calculateNumber('SUM', 1, 3.7), 5);
    });
    it('should return 5 for inputs (SUM, 1.2, 3.7)', () => {
      assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
    });
    it('should return 6 for inputs(SUM, 1.5, 3.7)', () => {
      assert.strictEqual(calculateNumber('SUM', 1.5, 3.7), 6);
    });
    it('should return 3 for inputs(SUM, 1.0, 2.0)', () => {
      assert.strictEqual(calculateNumber('SUM', 1.0, 2.0), 3);
    });
    it('should return 5 for inputs(SUM, 2.499999, 3.499999)', () => {
      assert.strictEqual(calculateNumber('SUM', 2.499999, 3.499999), 5);
    });
  });

  describe('SUBTRACT', () => {
    it('should return -2 for inputs (SUBTRACT, 1, 3)', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1, 3), -2);
    });
    it('should return -3 for inputs (SUBTRACT, 1, 3.7)', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1, 3.7), -3);
    });
    it('should return -3 for inputs (SUBTRACT, 1.2, 3.7)', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.2, 3.7), -3);
    });
    it('should return -2 for inputs(SUBTRACT, 1.5, 3.7)', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 3.7), -2);
    });
    it('should return 1 for inputs(SUBTRACT, 2.0, 1.0)', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.0, 1.0), 1);
    });
    it('should return -1 for inputs(SUBTRACT, 2.499999, 3.499999)', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.499999, 3.499999), -1);
    });
  });

  describe('DIVIDE', () => {
    it('should return 0.5 for inputs (DIVIDE, 1, 2)', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1, 2), 0.5);
    });
    it('should return 0.2 for inputs (DIVIDE, 1.4, 4.5)', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });
    it('should return Error for inputs (DIVIDE,1.4, 0)', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
  });
});
