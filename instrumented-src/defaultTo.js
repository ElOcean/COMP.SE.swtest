function cov_1v4354s08v(){var path="/Users/macepo/TTY/softatestaus/COMP.SE.swtest/src/defaultTo.js";var hash="f37b08cc322cea5f1153d91026f578248e0a4ed2";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"/Users/macepo/TTY/softatestaus/COMP.SE.swtest/src/defaultTo.js",statementMap:{"0":{start:{line:20,column:2},end:{line:20,column:45}}},fnMap:{"0":{name:"defaultTo",decl:{start:{line:19,column:9},end:{line:19,column:18}},loc:{start:{line:19,column:40},end:{line:21,column:1}},line:19}},branchMap:{"0":{loc:{start:{line:20,column:9},end:{line:20,column:45}},type:"cond-expr",locations:[{start:{line:20,column:25},end:{line:20,column:37}},{start:{line:20,column:40},end:{line:20,column:45}}],line:20}},s:{"0":0},f:{"0":0},b:{"0":[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"f37b08cc322cea5f1153d91026f578248e0a4ed2"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_1v4354s08v=function(){return actualCoverage;};}return actualCoverage;}cov_1v4354s08v();/**
 * Checks `value` to determine whether a default value should be returned in
 * its place. The `defaultValue` is returned if `value` is `NaN`, `null`,
 * or `undefined`.
 *
 * @since 4.14.0
 * @category Util
 * @param {*} value The value to check.
 * @param {*} defaultValue The default value.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * defaultTo(1, 10)
 * // => 1
 *
 * defaultTo(undefined, 10)
 * // => 10
 */function defaultTo(value,defaultValue){cov_1v4354s08v().f[0]++;cov_1v4354s08v().s[0]++;return value==null?(cov_1v4354s08v().b[0][0]++,defaultValue):(cov_1v4354s08v().b[0][1]++,value);}export default defaultTo;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMXY0MzU0czA4diIsImFjdHVhbENvdmVyYWdlIiwiZGVmYXVsdFRvIiwidmFsdWUiLCJkZWZhdWx0VmFsdWUiLCJmIiwicyIsImIiXSwic291cmNlcyI6WyJkZWZhdWx0VG8uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDaGVja3MgYHZhbHVlYCB0byBkZXRlcm1pbmUgd2hldGhlciBhIGRlZmF1bHQgdmFsdWUgc2hvdWxkIGJlIHJldHVybmVkIGluXG4gKiBpdHMgcGxhY2UuIFRoZSBgZGVmYXVsdFZhbHVlYCBpcyByZXR1cm5lZCBpZiBgdmFsdWVgIGlzIGBOYU5gLCBgbnVsbGAsXG4gKiBvciBgdW5kZWZpbmVkYC5cbiAqXG4gKiBAc2luY2UgNC4xNC4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcGFyYW0geyp9IGRlZmF1bHRWYWx1ZSBUaGUgZGVmYXVsdCB2YWx1ZS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSByZXNvbHZlZCB2YWx1ZS5cbiAqIEBleGFtcGxlXG4gKlxuICogZGVmYXVsdFRvKDEsIDEwKVxuICogLy8gPT4gMVxuICpcbiAqIGRlZmF1bHRUbyh1bmRlZmluZWQsIDEwKVxuICogLy8gPT4gMTBcbiAqL1xuZnVuY3Rpb24gZGVmYXVsdFRvKHZhbHVlLCBkZWZhdWx0VmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09IG51bGwgPyBkZWZhdWx0VmFsdWUgOiB2YWx1ZVxufVxuXG5leHBvcnQgZGVmYXVsdCBkZWZhdWx0VG9cbiJdLCJtYXBwaW5ncyI6IjJnQ0FlWTtBQUFBQSxjQUFBLFNBQUFBLENBQUEsU0FBQUMsY0FBQSxXQUFBQSxjQUFBLEVBQUFELGNBQUEsR0FmWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FDQSxRQUFTLENBQUFFLFNBQVNBLENBQUNDLEtBQUssQ0FBRUMsWUFBWSxDQUFFLENBQUFKLGNBQUEsR0FBQUssQ0FBQSxNQUFBTCxjQUFBLEdBQUFNLENBQUEsTUFDdEMsTUFBTyxDQUFBSCxLQUFLLEVBQUksSUFBSSxFQUFBSCxjQUFBLEdBQUFPLENBQUEsU0FBR0gsWUFBWSxHQUFBSixjQUFBLEdBQUFPLENBQUEsU0FBR0osS0FBSyxFQUM3QyxDQUVBLGNBQWUsQ0FBQUQsU0FBUyIsImlnbm9yZUxpc3QiOltdfQ==