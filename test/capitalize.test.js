import { expect } from 'chai';
import capitalize from '../src/capitalize.js';

describe('capitalize', () => {
  it('should capitalize the first letter when all are the lowercase or upper case', () => {
    expect(capitalize("TESTER")).to.equal("Tester")
    expect(capitalize("tester")).to.equal("Tester")
  });

  it('should return capitalized string with random case letters', () => {
    expect(capitalize("tEStER")).to.equal("Tester")
  }); 

  it('should return empty string with no arguments and empty string', () => {
    expect(capitalize('')).to.equal('')
  });

  it('should rerturn string when number argument is used', () => {
    const numberObject = 313
    expect(capitalize(numberObject)).to.equal('313')
    
  });
});