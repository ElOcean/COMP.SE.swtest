import words from '../src/words.js';
import { expect } from 'chai';

describe('words', () => {

  it('should return an empty array for an empty string', () => {
      expect(words('')).to.deep.equal([]);
  });

  it('should return an array with a single alphabet word for a string of alphabet characters', () => {
      expect(words('abc')).to.deep.equal(['abc']);
  });

  it('should return an array with a single numeric word for a string of numeric characters', () => {
    expect(words('123')).to.deep.equal(['123']);
  });

  it('should return an array of words for a string of random alphabet characters and spaces', () => {
      expect(words('  ab  c d ef      g ')).to.deep.equal(['ab', 'c', 'd', 'ef', 'g']);
  });

  it('should return an array of numeric words for a string of random numeric characters and spaces', () => {
      expect(words('  1 23   4      567      ')).to.deep.equal(['1', '23', '4', '567']);
  });

  it('should return an array of alphanumeric words for a string of random alphanumeric characters and spaces', () => {
      expect(words('  a b 1  cd2  e  3  f gh456  7i8j 90kl m ')).to.deep.equal(['a', 'b', '1', 'cd2', 'e', '3', 'f', 'gh456', '7i8j', '90kl', 'm']);
  });

  it('should return an empty array for a string of special characters', () => {
      expect(words('#!?,.')).to.deep.equal([]);
  });

  it('should return an empty array for a string of random special characters and spaces', () => {
      expect(words(' .  , ?? !!  [ ] # " @£$¤ %&')).to.deep.equal([]);
  });

  it('should return an array of words for a string of mixed special characters, alphanumeric characters, and spaces', () => {
      expect(words(' a .b  c1, d23?? !!4ef  g[56  h7]8 # " 9@£0i¤jk &lm')).to.deep.equal(['a', 'b', 'c1', 'd23', '4ef', 'g', '56', 'h7', '8', '9', '0i', 'jk', 'lm']);
  });

})
