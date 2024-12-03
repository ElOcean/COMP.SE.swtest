function cov_qboete688(){var path="/Users/macepo/TTY/softatestaus/COMP.SE.swtest/src/isArrayLikeObject.js";var hash="471f77f8a60d3af977a61c663e1c655ad08c707f";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"/Users/macepo/TTY/softatestaus/COMP.SE.swtest/src/isArrayLikeObject.js",statementMap:{"0":{start:{line:28,column:2},end:{line:28,column:50}}},fnMap:{"0":{name:"isArrayLikeObject",decl:{start:{line:27,column:9},end:{line:27,column:26}},loc:{start:{line:27,column:34},end:{line:29,column:1}},line:27}},branchMap:{"0":{loc:{start:{line:28,column:9},end:{line:28,column:50}},type:"binary-expr",locations:[{start:{line:28,column:9},end:{line:28,column:28}},{start:{line:28,column:32},end:{line:28,column:50}}],line:28}},s:{"0":0},f:{"0":0},b:{"0":[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"471f77f8a60d3af977a61c663e1c655ad08c707f"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_qboete688=function(){return actualCoverage;};}return actualCoverage;}cov_qboete688();import isArrayLike from'./isArrayLike.js';import isObjectLike from'./isObjectLike.js';/**
 * This method is like `isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * isArrayLikeObject([1, 2, 3])
 * // => true
 *
 * isArrayLikeObject(document.body.children)
 * // => true
 *
 * isArrayLikeObject('abc')
 * // => false
 *
 * isArrayLikeObject(Function)
 * // => false
 */function isArrayLikeObject(value){cov_qboete688().f[0]++;cov_qboete688().s[0]++;return(cov_qboete688().b[0][0]++,isObjectLike(value))&&(cov_qboete688().b[0][1]++,isArrayLike(value));}export default isArrayLikeObject;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfcWJvZXRlNjg4IiwiYWN0dWFsQ292ZXJhZ2UiLCJpc0FycmF5TGlrZSIsImlzT2JqZWN0TGlrZSIsImlzQXJyYXlMaWtlT2JqZWN0IiwidmFsdWUiLCJmIiwicyIsImIiXSwic291cmNlcyI6WyJpc0FycmF5TGlrZU9iamVjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaXNBcnJheUxpa2UgZnJvbSAnLi9pc0FycmF5TGlrZS5qcydcbmltcG9ydCBpc09iamVjdExpa2UgZnJvbSAnLi9pc09iamVjdExpa2UuanMnXG5cbi8qKlxuICogVGhpcyBtZXRob2QgaXMgbGlrZSBgaXNBcnJheUxpa2VgIGV4Y2VwdCB0aGF0IGl0IGFsc28gY2hlY2tzIGlmIGB2YWx1ZWBcbiAqIGlzIGFuIG9iamVjdC5cbiAqXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGFycmF5LWxpa2Ugb2JqZWN0LFxuICogIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogaXNBcnJheUxpa2VPYmplY3QoWzEsIDIsIDNdKVxuICogLy8gPT4gdHJ1ZVxuICpcbiAqIGlzQXJyYXlMaWtlT2JqZWN0KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pXG4gKiAvLyA9PiB0cnVlXG4gKlxuICogaXNBcnJheUxpa2VPYmplY3QoJ2FiYycpXG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIGlzQXJyYXlMaWtlT2JqZWN0KEZ1bmN0aW9uKVxuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUxpa2VPYmplY3QodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgaXNBcnJheUxpa2UodmFsdWUpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGlzQXJyYXlMaWtlT2JqZWN0XG4iXSwibWFwcGluZ3MiOiJtaUNBZVk7QUFBQUEsYUFBQSxTQUFBQSxDQUFBLFNBQUFDLGNBQUEsV0FBQUEsY0FBQSxFQUFBRCxhQUFBLEdBZlosTUFBTyxDQUFBRSxXQUFXLEtBQU0sa0JBQWtCLENBQzFDLE1BQU8sQ0FBQUMsWUFBWSxLQUFNLG1CQUFtQixDQUU1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQ0EsUUFBUyxDQUFBQyxpQkFBaUJBLENBQUNDLEtBQUssQ0FBRSxDQUFBTCxhQUFBLEdBQUFNLENBQUEsTUFBQU4sYUFBQSxHQUFBTyxDQUFBLE1BQ2hDLE1BQU8sQ0FBQVAsYUFBQSxHQUFBUSxDQUFBLFNBQUFMLFlBQVksQ0FBQ0UsS0FBSyxDQUFDLElBQUFMLGFBQUEsR0FBQVEsQ0FBQSxTQUFJTixXQUFXLENBQUNHLEtBQUssQ0FBQyxFQUNsRCxDQUVBLGNBQWUsQ0FBQUQsaUJBQWlCIiwiaWdub3JlTGlzdCI6W119