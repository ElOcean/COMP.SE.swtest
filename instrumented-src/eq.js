function cov_22mfx7csy5(){var path="/Users/macepo/TTY/softatestaus/COMP.SE.swtest/src/eq.js";var hash="6e20e55c141e1f2cd56eefb5c26b2550f1073705";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"/Users/macepo/TTY/softatestaus/COMP.SE.swtest/src/eq.js",statementMap:{"0":{start:{line:32,column:2},end:{line:32,column:63}}},fnMap:{"0":{name:"eq",decl:{start:{line:31,column:9},end:{line:31,column:11}},loc:{start:{line:31,column:26},end:{line:33,column:1}},line:31}},branchMap:{"0":{loc:{start:{line:32,column:9},end:{line:32,column:63}},type:"binary-expr",locations:[{start:{line:32,column:9},end:{line:32,column:23}},{start:{line:32,column:28},end:{line:32,column:43}},{start:{line:32,column:47},end:{line:32,column:62}}],line:32}},s:{"0":0},f:{"0":0},b:{"0":[0,0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"6e20e55c141e1f2cd56eefb5c26b2550f1073705"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_22mfx7csy5=function(){return actualCoverage;};}return actualCoverage;}cov_22mfx7csy5();/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * const object = { 'a': 1 }
 * const other = { 'a': 1 }
 *
 * eq(object, object)
 * // => true
 *
 * eq(object, other)
 * // => false
 *
 * eq('a', 'a')
 * // => true
 *
 * eq('a', Object('a'))
 * // => false
 *
 * eq(NaN, NaN)
 * // => true
 */function eq(value,other){cov_22mfx7csy5().f[0]++;cov_22mfx7csy5().s[0]++;return(cov_22mfx7csy5().b[0][0]++,value==other)||(cov_22mfx7csy5().b[0][1]++,value!==value)&&(cov_22mfx7csy5().b[0][2]++,other!==other);}export default eq;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMjJtZng3Y3N5NSIsImFjdHVhbENvdmVyYWdlIiwiZXEiLCJ2YWx1ZSIsIm90aGVyIiwiZiIsInMiLCJiIl0sInNvdXJjZXMiOlsiZXEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBQZXJmb3JtcyBhXG4gKiBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogY29tcGFyaXNvbiBiZXR3ZWVuIHR3byB2YWx1ZXMgdG8gZGV0ZXJtaW5lIGlmIHRoZXkgYXJlIGVxdWl2YWxlbnQuXG4gKlxuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Kn0gb3RoZXIgVGhlIG90aGVyIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBvYmplY3QgPSB7ICdhJzogMSB9XG4gKiBjb25zdCBvdGhlciA9IHsgJ2EnOiAxIH1cbiAqXG4gKiBlcShvYmplY3QsIG9iamVjdClcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBlcShvYmplY3QsIG90aGVyKVxuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBlcSgnYScsICdhJylcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBlcSgnYScsIE9iamVjdCgnYScpKVxuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBlcShOYU4sIE5hTilcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gZXEodmFsdWUsIG90aGVyKSB7XG4gIHJldHVybiB2YWx1ZSA9PSBvdGhlciB8fCAodmFsdWUgIT09IHZhbHVlICYmIG90aGVyICE9PSBvdGhlcilcbn1cblxuZXhwb3J0IGRlZmF1bHQgZXFcbiJdLCJtYXBwaW5ncyI6IjZpQ0FlWTtBQUFBQSxjQUFBLFNBQUFBLENBQUEsU0FBQUMsY0FBQSxXQUFBQSxjQUFBLEVBQUFELGNBQUEsR0FmWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FDQSxRQUFTLENBQUFFLEVBQUVBLENBQUNDLEtBQUssQ0FBRUMsS0FBSyxDQUFFLENBQUFKLGNBQUEsR0FBQUssQ0FBQSxNQUFBTCxjQUFBLEdBQUFNLENBQUEsTUFDeEIsTUFBTyxDQUFBTixjQUFBLEdBQUFPLENBQUEsU0FBQUosS0FBSyxFQUFJQyxLQUFLLEdBQUssQ0FBQUosY0FBQSxHQUFBTyxDQUFBLFNBQUFKLEtBQUssR0FBS0EsS0FBSyxJQUFBSCxjQUFBLEdBQUFPLENBQUEsU0FBSUgsS0FBSyxHQUFLQSxLQUFLLENBQUMsQ0FDL0QsQ0FFQSxjQUFlLENBQUFGLEVBQUUiLCJpZ25vcmVMaXN0IjpbXX0=