function cov_1wjxclin9j(){var path="/Users/macepo/TTY/softatestaus/COMP.SE.swtest/src/isLength.js";var hash="0dd883bedf54f3b8afddaaaeab8b8753bea8a20f";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"/Users/macepo/TTY/softatestaus/COMP.SE.swtest/src/isLength.js",statementMap:{"0":{start:{line:2,column:25},end:{line:2,column:41}},"1":{start:{line:29,column:2},end:{line:30,column:61}}},fnMap:{"0":{name:"isLength",decl:{start:{line:28,column:9},end:{line:28,column:17}},loc:{start:{line:28,column:25},end:{line:31,column:1}},line:28}},branchMap:{"0":{loc:{start:{line:29,column:9},end:{line:30,column:61}},type:"binary-expr",locations:[{start:{line:29,column:9},end:{line:29,column:34}},{start:{line:30,column:4},end:{line:30,column:14}},{start:{line:30,column:18},end:{line:30,column:32}},{start:{line:30,column:36},end:{line:30,column:61}}],line:29}},s:{"0":0,"1":0},f:{"0":0},b:{"0":[0,0,0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"0dd883bedf54f3b8afddaaaeab8b8753bea8a20f"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_1wjxclin9j=function(){return actualCoverage;};}return actualCoverage;}cov_1wjxclin9j();/** Used as references for various `Number` constants. */const MAX_SAFE_INTEGER=(cov_1wjxclin9j().s[0]++,9007199254740991);/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * isLength(3)
 * // => true
 *
 * isLength(Number.MIN_VALUE)
 * // => false
 *
 * isLength(Infinity)
 * // => false
 *
 * isLength('3')
 * // => false
 */function isLength(value){cov_1wjxclin9j().f[0]++;cov_1wjxclin9j().s[1]++;return(cov_1wjxclin9j().b[0][0]++,typeof value==='number')&&(cov_1wjxclin9j().b[0][1]++,value>-1)&&(cov_1wjxclin9j().b[0][2]++,value%1==0)&&(cov_1wjxclin9j().b[0][3]++,value<=MAX_SAFE_INTEGER);}export default isLength;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMXdqeGNsaW45aiIsImFjdHVhbENvdmVyYWdlIiwiTUFYX1NBRkVfSU5URUdFUiIsInMiLCJpc0xlbmd0aCIsInZhbHVlIiwiZiIsImIiXSwic291cmNlcyI6WyJpc0xlbmd0aC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbmNvbnN0IE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxXG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGxlbmd0aC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2QgaXMgbG9vc2VseSBiYXNlZCBvblxuICogW2BUb0xlbmd0aGBdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXRvbGVuZ3RoKS5cbiAqXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgbGVuZ3RoLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGlzTGVuZ3RoKDMpXG4gKiAvLyA9PiB0cnVlXG4gKlxuICogaXNMZW5ndGgoTnVtYmVyLk1JTl9WQUxVRSlcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogaXNMZW5ndGgoSW5maW5pdHkpXG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIGlzTGVuZ3RoKCczJylcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTGVuZ3RoKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmXG4gICAgdmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8PSBNQVhfU0FGRV9JTlRFR0VSXG59XG5cbmV4cG9ydCBkZWZhdWx0IGlzTGVuZ3RoXG4iXSwibWFwcGluZ3MiOiJnckNBZVk7QUFBQUEsY0FBQSxTQUFBQSxDQUFBLFNBQUFDLGNBQUEsV0FBQUEsY0FBQSxFQUFBRCxjQUFBLEdBZloseURBQ0EsS0FBTSxDQUFBRSxnQkFBZ0IsRUFBQUYsY0FBQSxHQUFBRyxDQUFBLE1BQUcsZ0JBQWdCLEVBRXpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUNBLFFBQVMsQ0FBQUMsUUFBUUEsQ0FBQ0MsS0FBSyxDQUFFLENBQUFMLGNBQUEsR0FBQU0sQ0FBQSxNQUFBTixjQUFBLEdBQUFHLENBQUEsTUFDdkIsTUFBTyxDQUFBSCxjQUFBLEdBQUFPLENBQUEsZUFBTyxDQUFBRixLQUFLLEdBQUssUUFBUSxJQUFBTCxjQUFBLEdBQUFPLENBQUEsU0FDOUJGLEtBQUssQ0FBRyxDQUFDLENBQUMsSUFBQUwsY0FBQSxHQUFBTyxDQUFBLFNBQUlGLEtBQUssQ0FBRyxDQUFDLEVBQUksQ0FBQyxJQUFBTCxjQUFBLEdBQUFPLENBQUEsU0FBSUYsS0FBSyxFQUFJSCxnQkFBZ0IsRUFDN0QsQ0FFQSxjQUFlLENBQUFFLFFBQVEiLCJpZ25vcmVMaXN0IjpbXX0=