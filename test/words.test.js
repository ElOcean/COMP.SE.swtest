import { expect } from 'chai';
import words from '../src/words.js';

describe('words', () => {
  it('should return an empty array for an empty string', () => {
    expect(words('')).to.deep.equal([]);
  })
});

