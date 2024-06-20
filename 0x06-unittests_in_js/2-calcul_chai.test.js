// Create a test case
const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return 4 for inputs (SUM, 1, 3)', () => {
      expect(calculateNumber('SUM', 1, 3)).to.equal(4);
    });
    it('should return 5 for inputs (SUM, 1, 3.7)', () => {
      expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
    });
    it('should return 5 for inputs (SUM, 1.2, 3.7)', () => {
      expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
    });
    it('should return 6 for inputs(SUM, 1.5, 3.7)', () => {
      expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
    });
    it('should return 3 for inputs(SUM, 1.0, 2.0)', () => {
      expect(calculateNumber('SUM', 1.0, 2.0)).to.equal(3);
    });
    it('should return 5 for inputs(SUM, 2.499999, 3.499999)', () => {
      expect(calculateNumber('SUM', 2.499999, 3.499999)).to.equal(5);
    });
  });

  describe('SUBTRACT', () => {
    it('should return -2 for inputs (SUBTRACT, 1, 3)', () => {
      expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
    });
    it('should return -3 for inputs (SUBTRACT, 1, 3.7)', () => {
      expect(calculateNumber('SUBTRACT', 1, 3.7)).to.equal(-3);
    });
    it('should return -3 for inputs (SUBTRACT, 1.2, 3.7)', () => {
      expect(calculateNumber('SUBTRACT', 1.2, 3.7)).to.equal(-3);
    });
    it('should return -2 for inputs(SUBTRACT, 1.5, 3.7)', () => {
      expect(calculateNumber('SUBTRACT', 1.5, 3.7)).to.equal(-2);
    });
    it('should return 1 for inputs(SUBTRACT, 2.0, 1.0)', () => {
      expect(calculateNumber('SUBTRACT', 2.0, 1.0)).to.equal(1);
    });
    it('should return -1 for inputs(SUBTRACT, 2.499999, 3.499999)', () => {
      expect(calculateNumber('SUBTRACT', 2.499999, 3.499999)).to.equal(-1);
    });
  });

  describe('DIVIDE', () => {
    it('should return 0.5 for inputs (DIVIDE, 1, 2)', () => {
      expect(calculateNumber('DIVIDE', 1, 2)).to.equal(0.5);
    });
    it('should return 0.2 for inputs (DIVIDE, 1.4, 4.5)', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });
    it('should return Error for inputs (DIVIDE,1.4, 0)', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
  });
});
