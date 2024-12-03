function cov_1g9mikg1v(){var path="/Users/macepo/TTY/softatestaus/COMP.SE.swtest/src/isObject.js";var hash="a3ae03013d48b775d2c61f6459a977aff56cc352";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"/Users/macepo/TTY/softatestaus/COMP.SE.swtest/src/isObject.js",statementMap:{"0":{start:{line:25,column:15},end:{line:25,column:27}},"1":{start:{line:26,column:2},end:{line:26,column:68}}},fnMap:{"0":{name:"isObject",decl:{start:{line:24,column:9},end:{line:24,column:17}},loc:{start:{line:24,column:25},end:{line:27,column:1}},line:24}},branchMap:{"0":{loc:{start:{line:26,column:9},end:{line:26,column:68}},type:"binary-expr",locations:[{start:{line:26,column:9},end:{line:26,column:22}},{start:{line:26,column:27},end:{line:26,column:44}},{start:{line:26,column:48},end:{line:26,column:67}}],line:26}},s:{"0":0,"1":0},f:{"0":0},b:{"0":[0,0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"a3ae03013d48b775d2c61f6459a977aff56cc352"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_1g9mikg1v=function(){return actualCoverage;};}return actualCoverage;}cov_1g9mikg1v();/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * isObject({})
 * // => true
 *
 * isObject([1, 2, 3])
 * // => true
 *
 * isObject(Function)
 * // => true
 *
 * isObject(null)
 * // => false
 */function isObject(value){cov_1g9mikg1v().f[0]++;const type=(cov_1g9mikg1v().s[0]++,typeof value);cov_1g9mikg1v().s[1]++;return(cov_1g9mikg1v().b[0][0]++,value!=null)&&((cov_1g9mikg1v().b[0][1]++,type==='object')||(cov_1g9mikg1v().b[0][2]++,type==='function'));}export default isObject;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMWc5bWlrZzF2IiwiYWN0dWFsQ292ZXJhZ2UiLCJpc09iamVjdCIsInZhbHVlIiwiZiIsInR5cGUiLCJzIiwiYiJdLCJzb3VyY2VzIjpbImlzT2JqZWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlXG4gKiBbbGFuZ3VhZ2UgdHlwZV0oaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLWVjbWFzY3JpcHQtbGFuZ3VhZ2UtdHlwZXMpXG4gKiBvZiBgT2JqZWN0YC4gKGUuZy4gYXJyYXlzLCBmdW5jdGlvbnMsIG9iamVjdHMsIHJlZ2V4ZXMsIGBuZXcgTnVtYmVyKDApYCwgYW5kIGBuZXcgU3RyaW5nKCcnKWApXG4gKlxuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogaXNPYmplY3Qoe30pXG4gKiAvLyA9PiB0cnVlXG4gKlxuICogaXNPYmplY3QoWzEsIDIsIDNdKVxuICogLy8gPT4gdHJ1ZVxuICpcbiAqIGlzT2JqZWN0KEZ1bmN0aW9uKVxuICogLy8gPT4gdHJ1ZVxuICpcbiAqIGlzT2JqZWN0KG51bGwpXG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICBjb25zdCB0eXBlID0gdHlwZW9mIHZhbHVlXG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmICh0eXBlID09PSAnb2JqZWN0JyB8fCB0eXBlID09PSAnZnVuY3Rpb24nKVxufVxuXG5leHBvcnQgZGVmYXVsdCBpc09iamVjdFxuIl0sIm1hcHBpbmdzIjoiNG5DQWVZO0FBQUFBLGFBQUEsU0FBQUEsQ0FBQSxTQUFBQyxjQUFBLFdBQUFBLGNBQUEsRUFBQUQsYUFBQSxHQWZaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FDQSxRQUFTLENBQUFFLFFBQVFBLENBQUNDLEtBQUssQ0FBRSxDQUFBSCxhQUFBLEdBQUFJLENBQUEsTUFDdkIsS0FBTSxDQUFBQyxJQUFJLEVBQUFMLGFBQUEsR0FBQU0sQ0FBQSxNQUFHLE1BQU8sQ0FBQUgsS0FBSyxFQUFBSCxhQUFBLEdBQUFNLENBQUEsTUFDekIsTUFBTyxDQUFBTixhQUFBLEdBQUFPLENBQUEsU0FBQUosS0FBSyxFQUFJLElBQUksSUFBSyxDQUFBSCxhQUFBLEdBQUFPLENBQUEsU0FBQUYsSUFBSSxHQUFLLFFBQVEsSUFBQUwsYUFBQSxHQUFBTyxDQUFBLFNBQUlGLElBQUksR0FBSyxVQUFVLEVBQUMsQ0FDcEUsQ0FFQSxjQUFlLENBQUFILFFBQVEiLCJpZ25vcmVMaXN0IjpbXX0=