function cov_1d4zx9w11i(){var path="/Users/macepo/TTY/softatestaus/COMP.SE.swtest/src/keys.js";var hash="5ecefa8b21f9322738556e0bd9c963eb97430fb6";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"/Users/macepo/TTY/softatestaus/COMP.SE.swtest/src/keys.js",statementMap:{"0":{start:{line:32,column:2},end:{line:34,column:33}}},fnMap:{"0":{name:"keys",decl:{start:{line:31,column:9},end:{line:31,column:13}},loc:{start:{line:31,column:22},end:{line:35,column:1}},line:31}},branchMap:{"0":{loc:{start:{line:32,column:9},end:{line:34,column:33}},type:"cond-expr",locations:[{start:{line:33,column:6},end:{line:33,column:27}},{start:{line:34,column:6},end:{line:34,column:33}}],line:32}},s:{"0":0},f:{"0":0},b:{"0":[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"5ecefa8b21f9322738556e0bd9c963eb97430fb6"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_1d4zx9w11i=function(){return actualCoverage;};}return actualCoverage;}cov_1d4zx9w11i();import arrayLikeKeys from'./.internal/arrayLikeKeys.js';import isArrayLike from'./isArrayLike.js';/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @since 0.1.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @see values, valuesIn
 * @example
 *
 * function Foo() {
 *   this.a = 1
 *   this.b = 2
 * }
 *
 * Foo.prototype.c = 3
 *
 * keys(new Foo)
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * keys('hi')
 * // => ['0', '1']
 */function keys(object){cov_1d4zx9w11i().f[0]++;cov_1d4zx9w11i().s[0]++;return isArrayLike(object)?(cov_1d4zx9w11i().b[0][0]++,arrayLikeKeys(object)):(cov_1d4zx9w11i().b[0][1]++,Object.keys(Object(object)));}export default keys;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMWQ0eng5dzExaSIsImFjdHVhbENvdmVyYWdlIiwiYXJyYXlMaWtlS2V5cyIsImlzQXJyYXlMaWtlIiwia2V5cyIsIm9iamVjdCIsImYiLCJzIiwiYiIsIk9iamVjdCJdLCJzb3VyY2VzIjpbImtleXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFycmF5TGlrZUtleXMgZnJvbSAnLi8uaW50ZXJuYWwvYXJyYXlMaWtlS2V5cy5qcydcbmltcG9ydCBpc0FycmF5TGlrZSBmcm9tICcuL2lzQXJyYXlMaWtlLmpzJ1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIGBvYmplY3RgLlxuICpcbiAqICoqTm90ZToqKiBOb24tb2JqZWN0IHZhbHVlcyBhcmUgY29lcmNlZCB0byBvYmplY3RzLiBTZWUgdGhlXG4gKiBbRVMgc3BlY10oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LmtleXMpXG4gKiBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqIEBzZWUgdmFsdWVzLCB2YWx1ZXNJblxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDFcbiAqICAgdGhpcy5iID0gMlxuICogfVxuICpcbiAqIEZvby5wcm90b3R5cGUuYyA9IDNcbiAqXG4gKiBrZXlzKG5ldyBGb28pXG4gKiAvLyA9PiBbJ2EnLCAnYiddIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKlxuICoga2V5cygnaGknKVxuICogLy8gPT4gWycwJywgJzEnXVxuICovXG5mdW5jdGlvbiBrZXlzKG9iamVjdCkge1xuICByZXR1cm4gaXNBcnJheUxpa2Uob2JqZWN0KVxuICAgID8gYXJyYXlMaWtlS2V5cyhvYmplY3QpXG4gICAgOiBPYmplY3Qua2V5cyhPYmplY3Qob2JqZWN0KSlcbn1cblxuZXhwb3J0IGRlZmF1bHQga2V5c1xuIl0sIm1hcHBpbmdzIjoiMC9CQWVZO0FBQUFBLGNBQUEsU0FBQUEsQ0FBQSxTQUFBQyxjQUFBLFdBQUFBLGNBQUEsRUFBQUQsY0FBQSxHQWZaLE1BQU8sQ0FBQUUsYUFBYSxLQUFNLDhCQUE4QixDQUN4RCxNQUFPLENBQUFDLFdBQVcsS0FBTSxrQkFBa0IsQ0FFMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQ0EsUUFBUyxDQUFBQyxJQUFJQSxDQUFDQyxNQUFNLENBQUUsQ0FBQUwsY0FBQSxHQUFBTSxDQUFBLE1BQUFOLGNBQUEsR0FBQU8sQ0FBQSxNQUNwQixNQUFPLENBQUFKLFdBQVcsQ0FBQ0UsTUFBTSxDQUFDLEVBQUFMLGNBQUEsR0FBQVEsQ0FBQSxTQUN0Qk4sYUFBYSxDQUFDRyxNQUFNLENBQUMsR0FBQUwsY0FBQSxHQUFBUSxDQUFBLFNBQ3JCQyxNQUFNLENBQUNMLElBQUksQ0FBQ0ssTUFBTSxDQUFDSixNQUFNLENBQUMsQ0FBQyxFQUNqQyxDQUVBLGNBQWUsQ0FBQUQsSUFBSSIsImlnbm9yZUxpc3QiOltdfQ==