import toNumber from '../src/toNumber.js';
import { expect } from 'chai';

describe('toNumber', () => {
    it('should return the number when input is a number', () => {
        expect(toNumber(42)).to.equal(42);
        expect(toNumber(-3.14)).to.equal(-3.14);
    });

    it('should convert string numbers to numbers', () => {
        expect(toNumber('42')).to.equal(42);
        expect(toNumber('3.14')).to.equal(3.14);
        expect(toNumber('-3.14')).to.equal(-3.14);
    });

    it('should return NaN for non-numeric strings', () => {
        expect(Number.isNaN(toNumber('hello'))).to.be.true;
        expect(Number.isNaN(toNumber(''))).to.be.true;
    });

    it('should return NaN for other types than number or string', () => {
       expect(Number.isNaN(toNumber({}))).to.be.true;
       expect(Number.isNaN(toNumber(() => {}))).to.be.true;
    });
    
});