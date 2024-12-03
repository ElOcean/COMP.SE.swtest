function cov_n5kf8gtcr(){var path="/Users/macepo/TTY/softatestaus/COMP.SE.swtest/src/defaultToAny.js";var hash="56d10134058b6a24aeb85152682ddcd97e164937";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"/Users/macepo/TTY/softatestaus/COMP.SE.swtest/src/defaultToAny.js",statementMap:{"0":{start:{line:29,column:2},end:{line:29,column:53}}},fnMap:{"0":{name:"defaultToAny",decl:{start:{line:28,column:9},end:{line:28,column:21}},loc:{start:{line:28,column:47},end:{line:30,column:1}},line:28}},branchMap:{},s:{"0":0},f:{"0":0},b:{},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"56d10134058b6a24aeb85152682ddcd97e164937"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_n5kf8gtcr=function(){return actualCoverage;};}return actualCoverage;}cov_n5kf8gtcr();import arrayReduce from'./.internal/arrayReduce.js';import defaultTo from'./defaultTo.js';/**
 * This method is like `defaultTo` except that it accepts multiple default values and returns the first one that is not
 * `NaN`, `null`, or `undefined`.
 *
 * @since 5.0.0
 * @category Util
 * @param {*} value The value to check.
 * @param {...*} defaultValues The default values.
 * @returns {*} Returns the resolved value.
 * @see _.defaultTo
 * @example
 *
 * defaultToAny(1, 10, 20)
 * // => 1
 *
 * defaultToAny(undefined, 10, 20)
 * // => 10
 *
 * defaultToAny(undefined, null, 20)
 * // => 20
 *
 * defaultToAny(undefined, null, NaN)
 * // => NaN
 */function defaultToAny(value,...defaultValues){cov_n5kf8gtcr().f[0]++;cov_n5kf8gtcr().s[0]++;return arrayReduce(defaultValues,defaultTo,value);}export default defaultToAny;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfbjVrZjhndGNyIiwiYWN0dWFsQ292ZXJhZ2UiLCJhcnJheVJlZHVjZSIsImRlZmF1bHRUbyIsImRlZmF1bHRUb0FueSIsInZhbHVlIiwiZGVmYXVsdFZhbHVlcyIsImYiLCJzIl0sInNvdXJjZXMiOlsiZGVmYXVsdFRvQW55LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhcnJheVJlZHVjZSBmcm9tICcuLy5pbnRlcm5hbC9hcnJheVJlZHVjZS5qcydcbmltcG9ydCBkZWZhdWx0VG8gZnJvbSAnLi9kZWZhdWx0VG8uanMnXG5cbi8qKlxuICogVGhpcyBtZXRob2QgaXMgbGlrZSBgZGVmYXVsdFRvYCBleGNlcHQgdGhhdCBpdCBhY2NlcHRzIG11bHRpcGxlIGRlZmF1bHQgdmFsdWVzIGFuZCByZXR1cm5zIHRoZSBmaXJzdCBvbmUgdGhhdCBpcyBub3RcbiAqIGBOYU5gLCBgbnVsbGAsIG9yIGB1bmRlZmluZWRgLlxuICpcbiAqIEBzaW5jZSA1LjAuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHBhcmFtIHsuLi4qfSBkZWZhdWx0VmFsdWVzIFRoZSBkZWZhdWx0IHZhbHVlcy5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSByZXNvbHZlZCB2YWx1ZS5cbiAqIEBzZWUgXy5kZWZhdWx0VG9cbiAqIEBleGFtcGxlXG4gKlxuICogZGVmYXVsdFRvQW55KDEsIDEwLCAyMClcbiAqIC8vID0+IDFcbiAqXG4gKiBkZWZhdWx0VG9BbnkodW5kZWZpbmVkLCAxMCwgMjApXG4gKiAvLyA9PiAxMFxuICpcbiAqIGRlZmF1bHRUb0FueSh1bmRlZmluZWQsIG51bGwsIDIwKVxuICogLy8gPT4gMjBcbiAqXG4gKiBkZWZhdWx0VG9BbnkodW5kZWZpbmVkLCBudWxsLCBOYU4pXG4gKiAvLyA9PiBOYU5cbiAqL1xuZnVuY3Rpb24gZGVmYXVsdFRvQW55KHZhbHVlLCAuLi5kZWZhdWx0VmFsdWVzKSB7XG4gIHJldHVybiBhcnJheVJlZHVjZShkZWZhdWx0VmFsdWVzLCBkZWZhdWx0VG8sIHZhbHVlKVxufVxuXG5leHBvcnQgZGVmYXVsdCBkZWZhdWx0VG9BbnlcbiJdLCJtYXBwaW5ncyI6ImkwQkFlWTtBQUFBQSxhQUFBLFNBQUFBLENBQUEsU0FBQUMsY0FBQSxXQUFBQSxjQUFBLEVBQUFELGFBQUEsR0FmWixNQUFPLENBQUFFLFdBQVcsS0FBTSw0QkFBNEIsQ0FDcEQsTUFBTyxDQUFBQyxTQUFTLEtBQU0sZ0JBQWdCLENBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUNBLFFBQVMsQ0FBQUMsWUFBWUEsQ0FBQ0MsS0FBSyxDQUFFLEdBQUdDLGFBQWEsQ0FBRSxDQUFBTixhQUFBLEdBQUFPLENBQUEsTUFBQVAsYUFBQSxHQUFBUSxDQUFBLE1BQzdDLE1BQU8sQ0FBQU4sV0FBVyxDQUFDSSxhQUFhLENBQUVILFNBQVMsQ0FBRUUsS0FBSyxDQUFDLENBQ3JELENBRUEsY0FBZSxDQUFBRCxZQUFZIiwiaWdub3JlTGlzdCI6W119