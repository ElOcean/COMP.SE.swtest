import { expect } from 'chai';
import words from '../src/words.js';

// Test handling of empty input

describe('words', () => {
  it('should return an empty array for an empty string', () => {
    expect(words('')).to.deep.equal([]);
  })
});

// Test handling of special characters


// Test handling of extra spaces

// Test handling of spaces and special characters combined

// Test handling of multilingual input


// Test handling of numeric and mixed input
