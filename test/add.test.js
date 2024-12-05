import { expect } from 'chai';
import add from '../src/add.js';

describe('add', () => {

    it('should add together positive numbers', () => {
        expect(add(1,2)).to.equal(3)
    })

    it('should add together negative numbers', () => {
        expect(add(-1,-2)).to.equal(-3)
    })

    it('should add together one positive and one negative numbers', () => {
        expect(add(-1,2)).to.equal(1)
    })

    it('should add together float numbers', () => {
        expect(add(3.14,2)).to.be.closeTo(5.14,0.0001)
    })

    it('should return zero with empty input ', () => {
        expect(add()).to.equal(0)
    })

    it('should return zero with empty inputs', () => {
        expect(add(0,0)).to.equal(0)
    })

    it('should throw an error for incorrect input', () => {
        expect(() => add(null, 0)).to.throw(TypeError, 'Invalid input');
      });
      
})
