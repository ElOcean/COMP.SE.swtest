import { expect } from 'chai';
import isObject from '../src/isObject.js';

describe('isObject', () => {
  it('should return true for plain objects', () => {
    expect(isObject({})).to.be.true;
  });

  it('should return true for arrays', () => {
    expect(isObject([1, 2, 3])).to.be.true;
  });

  it('should return true for functions', () => {
    expect(isObject(Function)).to.be.true;
  });

  it('should return false for null', () => {
    expect(isObject(null)).to.be.false;
  });

  //added edge cases to make test ensure quality
  it('should return false for primitive values', () => {
    expect(isObject(42)).to.be.false;
    expect(isObject('string')).to.be.false;
    expect(isObject(false)).to.be.false;
    expect(isObject(undefined)).to.be.false;
  });
});
