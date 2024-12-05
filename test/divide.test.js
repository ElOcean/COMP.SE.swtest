import { expect } from 'chai';
import divide from '../src/divide.js';

describe('divide', () => {

    it('should return positive quotient with both positive dividend and divisor', () => {
        expect(divide(10,2)).to.equal(5)
    })

    it('should return 1 when both dividend and divisor are the same', () => {
        expect(divide(1,1)).to.equal(1)
    })

    it('should return negative quotient with either positive dividend or divisor', () => {
        expect(divide(-10,2)).to.equal(-5)
    })

    it('should return positive quotient with both negative dividend and divisor', () => {
        expect(divide(-10,-2)).to.equal(5)
    })

    it('should return  quotient in 1 decimal accuracy', () => {
        expect(divide(100,3)).to.equal(33.3)
    })

    it('should throw an error with 0 as divisor', () => {
        expect(() => divide(100, 0)).to.throw(Error, 'Division by zero');
      }) 
})
