import { expect } from 'chai';
import get from '../src/get.js';

describe('get', () => {
  const object = { a: [{ b: { c: 3 } }] };

  it('should return the value at the specified string path', () => {
    expect(get(object, 'a[0].b.c')).to.equal(3);
  });

  it('should return the value at the specified array path', () => {
    expect(get(object, ['a', '0', 'b', 'c'])).to.equal(3);
  });

  it('should return the default value if the path doesnt exist', () => {
    expect(get(object, 'a.b.c', 'default')).to.equal('default');
  });

  it('should return undefined if the path does not exist and no default value is provided', () => {
    expect(get(object, 'a.b.c')).to.equal(undefined);
  });

  it('should return the default value if the object is null or undefined', () => {
    expect(get(null, 'a[0].b.c', 'default')).to.equal('default');
    expect(get(undefined, 'a[0].b.c', 'default')).to.equal('default');
  });

  it('should handle invalid paths ', () => {
    expect(get(object, 'invalid.path', 'default')).to.equal('default');
    expect(get(object, ['invalid', 'path'], 'default')).to.equal('default');
  });

  
});
