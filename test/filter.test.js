import { expect } from 'chai';
import filter from '../src/filter.js';

const users = [
  { user: 'barney', active: true },
  { user: 'fred', active: false },
  { user: 'tester', active: true }
];

describe('filter', () => {
  it('should filter elements based on the predicate', () => {
    const result = filter(users, ({active}) => active);
    expect(result).to.deep.equal([
      { user: 'barney', active: true },
      { user: 'tester', active: true }
    ]);
  });

  it('should return empty array for empty input array', () => {
    const result = filter([], () => true);
    expect(result).to.deep.equal([[]]);
  });

  it('should return empty array for a predicate that filters nothing', () => {
    const result = filter(users, () => false);
    expect(result).to.deep.equal([[]]);
  });

  it('should return the same array for a predicate that filters everything', () => {
    const result = filter(users, () => true);
    expect(result).to.deep.equal(users);
  });

});
