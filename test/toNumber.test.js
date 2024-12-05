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

    it('should return null for non-numeric strings', () => {
        expect(toNumber('hello')).to.be.null;
        expect(toNumber('')).to.be.null;
        expect(toNumber('42abc')).to.be.null;
    });

    it('should return null for other non-convertible types', () => {
        expect(toNumber(null)).to.be.null;
        expect(toNumber(undefined)).to.be.null;
        expect(toNumber({})).to.be.null;
        expect(toNumber(() => {})).to.be.null;
    });
});