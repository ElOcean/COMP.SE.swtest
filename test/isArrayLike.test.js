import { expect } from 'chai';
import isArrayLike from '../src/isArrayLike.js';

describe('isArrayLike', () => {
  it('should return true for an array', () => {
    expect(isArrayLike([1, 2, 3])).to.be.true;
  });

  it('should return true for an array-like object ( `document.body.children`)', () => {
    const mockArrayLike = { length: 2, 0: 'item1', 1: 'item2' }; // Mock for testing
    expect(isArrayLike(mockArrayLike)).to.be.true;
  });

  it('should return true for a string', () => {
    expect(isArrayLike('abc')).to.be.true;
  });

  it('should return false for a function', () => {
    expect(isArrayLike(Function)).to.be.false;
  });

  it('should return false for a non-array-like object', () => {
    const nonArrayLike = { key: 'value' };
    expect(isArrayLike(nonArrayLike)).to.be.false;
  });
});
