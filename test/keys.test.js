import { expect } from 'chai';
import keys from '../src/keys.js';

describe('keys', () => {
  it('should return the own enumerable property names of an object', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(keys(obj)).to.deep.equal(['a', 'b', 'c']);
  });
  
});

