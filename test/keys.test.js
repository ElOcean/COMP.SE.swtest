import { expect } from 'chai';
import keys from '../src/keys.js';

describe('keys', () => {
  it('should handle array-like objects( strings in this case', () => {
    const result = keys('hello');
    expect(result).to.deep.equal(['0','1','2','3','4']);
  });
 
  it('should return the keys', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(keys(obj)).to.deep.equal(['a', 'b', 'c']);
  });

  it('should return the keys of objects with numeric keys', () => {
    const object = { 42: 'foo', 1: 'bar', 3: 'baz' };
    const result = keys(object);
    expect(result).to.deep.equal(['1', '3', '42']);
  })

  it('should return empty array for empty objects', () => {
    const result = keys({});
    expect(result).to.deep.equal([]);
  });

  it('should return the keys of a nested object', () => {
    const object = { a: { b: 1, c: 2 } };
    const result = keys(object);
    expect(result).to.deep.equal(['a']);
  });
  
});

