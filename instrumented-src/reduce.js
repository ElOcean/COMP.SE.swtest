function cov_1gme09xdac(){var path="/Users/macepo/TTY/softatestaus/COMP.SE.swtest/src/reduce.js";var hash="c82481594dce884a323b07628f343fdc248a83e1";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"/Users/macepo/TTY/softatestaus/COMP.SE.swtest/src/reduce.js",statementMap:{"0":{start:{line:39,column:15},end:{line:39,column:67}},"1":{start:{line:40,column:20},end:{line:40,column:40}},"2":{start:{line:41,column:2},end:{line:41,column:69}}},fnMap:{"0":{name:"reduce",decl:{start:{line:38,column:9},end:{line:38,column:15}},loc:{start:{line:38,column:51},end:{line:42,column:1}},line:38}},branchMap:{"0":{loc:{start:{line:39,column:15},end:{line:39,column:67}},type:"cond-expr",locations:[{start:{line:39,column:43},end:{line:39,column:54}},{start:{line:39,column:57},end:{line:39,column:67}}],line:39}},s:{"0":0,"1":0,"2":0},f:{"0":0},b:{"0":[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"c82481594dce884a323b07628f343fdc248a83e1"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_1gme09xdac=function(){return actualCoverage;};}return actualCoverage;}cov_1gme09xdac();import arrayReduce from'./.internal/arrayReduce.js';import baseEach from'./.internal/baseEach.js';import baseReduce from'./.internal/baseReduce.js';/**
 * Reduces `collection` to a value which is the accumulated result of running
 * each element in `collection` thru `iteratee`, where each successive
 * invocation is supplied the return value of the previous. If `accumulator`
 * is not given, the first element of `collection` is used as the initial
 * value. The iteratee is invoked with four arguments:
 * (accumulator, value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `reduce`, `reduceRight`, and `transform`.
 *
 * The guarded methods are:
 * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
 * and `sortBy`
 *
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @returns {*} Returns the accumulated value.
 * @see reduceRight, transform
 * @example
 *
 * reduce([1, 2], (sum, n) => sum + n, 0)
 * // => 3
 *
 * reduce({ 'a': 1, 'b': 2, 'c': 1 }, (result, value, key) => {
 *   (result[value] || (result[value] = [])).push(key)
 *   return result
 * }, {})
 * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
 */function reduce(collection,iteratee,accumulator){cov_1gme09xdac().f[0]++;const func=(cov_1gme09xdac().s[0]++,Array.isArray(collection)?(cov_1gme09xdac().b[0][0]++,arrayReduce):(cov_1gme09xdac().b[0][1]++,baseReduce));const initAccum=(cov_1gme09xdac().s[1]++,arguments.length<3);cov_1gme09xdac().s[2]++;return func(collection,iteratee,accumulator,initAccum,baseEach);}export default reduce;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMWdtZTA5eGRhYyIsImFjdHVhbENvdmVyYWdlIiwiYXJyYXlSZWR1Y2UiLCJiYXNlRWFjaCIsImJhc2VSZWR1Y2UiLCJyZWR1Y2UiLCJjb2xsZWN0aW9uIiwiaXRlcmF0ZWUiLCJhY2N1bXVsYXRvciIsImYiLCJmdW5jIiwicyIsIkFycmF5IiwiaXNBcnJheSIsImIiLCJpbml0QWNjdW0iLCJhcmd1bWVudHMiLCJsZW5ndGgiXSwic291cmNlcyI6WyJyZWR1Y2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFycmF5UmVkdWNlIGZyb20gJy4vLmludGVybmFsL2FycmF5UmVkdWNlLmpzJ1xuaW1wb3J0IGJhc2VFYWNoIGZyb20gJy4vLmludGVybmFsL2Jhc2VFYWNoLmpzJ1xuaW1wb3J0IGJhc2VSZWR1Y2UgZnJvbSAnLi8uaW50ZXJuYWwvYmFzZVJlZHVjZS5qcydcblxuLyoqXG4gKiBSZWR1Y2VzIGBjb2xsZWN0aW9uYCB0byBhIHZhbHVlIHdoaWNoIGlzIHRoZSBhY2N1bXVsYXRlZCByZXN1bHQgb2YgcnVubmluZ1xuICogZWFjaCBlbGVtZW50IGluIGBjb2xsZWN0aW9uYCB0aHJ1IGBpdGVyYXRlZWAsIHdoZXJlIGVhY2ggc3VjY2Vzc2l2ZVxuICogaW52b2NhdGlvbiBpcyBzdXBwbGllZCB0aGUgcmV0dXJuIHZhbHVlIG9mIHRoZSBwcmV2aW91cy4gSWYgYGFjY3VtdWxhdG9yYFxuICogaXMgbm90IGdpdmVuLCB0aGUgZmlyc3QgZWxlbWVudCBvZiBgY29sbGVjdGlvbmAgaXMgdXNlZCBhcyB0aGUgaW5pdGlhbFxuICogdmFsdWUuIFRoZSBpdGVyYXRlZSBpcyBpbnZva2VkIHdpdGggZm91ciBhcmd1bWVudHM6XG4gKiAoYWNjdW11bGF0b3IsIHZhbHVlLCBpbmRleHxrZXksIGNvbGxlY3Rpb24pLlxuICpcbiAqIE1hbnkgbG9kYXNoIG1ldGhvZHMgYXJlIGd1YXJkZWQgdG8gd29yayBhcyBpdGVyYXRlZXMgZm9yIG1ldGhvZHMgbGlrZVxuICogYHJlZHVjZWAsIGByZWR1Y2VSaWdodGAsIGFuZCBgdHJhbnNmb3JtYC5cbiAqXG4gKiBUaGUgZ3VhcmRlZCBtZXRob2RzIGFyZTpcbiAqIGBhc3NpZ25gLCBgZGVmYXVsdHNgLCBgZGVmYXVsdHNEZWVwYCwgYGluY2x1ZGVzYCwgYG1lcmdlYCwgYG9yZGVyQnlgLFxuICogYW5kIGBzb3J0QnlgXG4gKlxuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgQ29sbGVjdGlvblxuICogQHBhcmFtIHtBcnJheXxPYmplY3R9IGNvbGxlY3Rpb24gVGhlIGNvbGxlY3Rpb24gdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEBwYXJhbSB7Kn0gW2FjY3VtdWxhdG9yXSBUaGUgaW5pdGlhbCB2YWx1ZS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBhY2N1bXVsYXRlZCB2YWx1ZS5cbiAqIEBzZWUgcmVkdWNlUmlnaHQsIHRyYW5zZm9ybVxuICogQGV4YW1wbGVcbiAqXG4gKiByZWR1Y2UoWzEsIDJdLCAoc3VtLCBuKSA9PiBzdW0gKyBuLCAwKVxuICogLy8gPT4gM1xuICpcbiAqIHJlZHVjZSh7ICdhJzogMSwgJ2InOiAyLCAnYyc6IDEgfSwgKHJlc3VsdCwgdmFsdWUsIGtleSkgPT4ge1xuICogICAocmVzdWx0W3ZhbHVlXSB8fCAocmVzdWx0W3ZhbHVlXSA9IFtdKSkucHVzaChrZXkpXG4gKiAgIHJldHVybiByZXN1bHRcbiAqIH0sIHt9KVxuICogLy8gPT4geyAnMSc6IFsnYScsICdjJ10sICcyJzogWydiJ10gfSAoaXRlcmF0aW9uIG9yZGVyIGlzIG5vdCBndWFyYW50ZWVkKVxuICovXG5mdW5jdGlvbiByZWR1Y2UoY29sbGVjdGlvbiwgaXRlcmF0ZWUsIGFjY3VtdWxhdG9yKSB7XG4gIGNvbnN0IGZ1bmMgPSBBcnJheS5pc0FycmF5KGNvbGxlY3Rpb24pID8gYXJyYXlSZWR1Y2UgOiBiYXNlUmVkdWNlXG4gIGNvbnN0IGluaXRBY2N1bSA9IGFyZ3VtZW50cy5sZW5ndGggPCAzXG4gIHJldHVybiBmdW5jKGNvbGxlY3Rpb24sIGl0ZXJhdGVlLCBhY2N1bXVsYXRvciwgaW5pdEFjY3VtLCBiYXNlRWFjaClcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlXG4iXSwibWFwcGluZ3MiOiIrbkNBZVk7QUFBQUEsY0FBQSxTQUFBQSxDQUFBLFNBQUFDLGNBQUEsV0FBQUEsY0FBQSxFQUFBRCxjQUFBLEdBZlosTUFBTyxDQUFBRSxXQUFXLEtBQU0sNEJBQTRCLENBQ3BELE1BQU8sQ0FBQUMsUUFBUSxLQUFNLHlCQUF5QixDQUM5QyxNQUFPLENBQUFDLFVBQVUsS0FBTSwyQkFBMkIsQ0FFbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQ0EsUUFBUyxDQUFBQyxNQUFNQSxDQUFDQyxVQUFVLENBQUVDLFFBQVEsQ0FBRUMsV0FBVyxDQUFFLENBQUFSLGNBQUEsR0FBQVMsQ0FBQSxNQUNqRCxLQUFNLENBQUFDLElBQUksRUFBQVYsY0FBQSxHQUFBVyxDQUFBLE1BQUdDLEtBQUssQ0FBQ0MsT0FBTyxDQUFDUCxVQUFVLENBQUMsRUFBQU4sY0FBQSxHQUFBYyxDQUFBLFNBQUdaLFdBQVcsR0FBQUYsY0FBQSxHQUFBYyxDQUFBLFNBQUdWLFVBQVUsR0FDakUsS0FBTSxDQUFBVyxTQUFTLEVBQUFmLGNBQUEsR0FBQVcsQ0FBQSxNQUFHSyxTQUFTLENBQUNDLE1BQU0sQ0FBRyxDQUFDLEVBQUFqQixjQUFBLEdBQUFXLENBQUEsTUFDdEMsTUFBTyxDQUFBRCxJQUFJLENBQUNKLFVBQVUsQ0FBRUMsUUFBUSxDQUFFQyxXQUFXLENBQUVPLFNBQVMsQ0FBRVosUUFBUSxDQUFDLENBQ3JFLENBRUEsY0FBZSxDQUFBRSxNQUFNIiwiaWdub3JlTGlzdCI6W119