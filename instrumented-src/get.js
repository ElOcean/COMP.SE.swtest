function cov_2ldxutcpt2(){var path="/Users/macepo/TTY/softatestaus/COMP.SE.swtest/src/get.js";var hash="a547126b0cab277559cfddcca2cb17dabb1d8729";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"/Users/macepo/TTY/softatestaus/COMP.SE.swtest/src/get.js",statementMap:{"0":{start:{line:28,column:17},end:{line:28,column:67}},"1":{start:{line:29,column:2},end:{line:29,column:53}}},fnMap:{"0":{name:"get",decl:{start:{line:27,column:9},end:{line:27,column:12}},loc:{start:{line:27,column:41},end:{line:30,column:1}},line:27}},branchMap:{"0":{loc:{start:{line:28,column:17},end:{line:28,column:67}},type:"cond-expr",locations:[{start:{line:28,column:34},end:{line:28,column:43}},{start:{line:28,column:46},end:{line:28,column:67}}],line:28},"1":{loc:{start:{line:29,column:9},end:{line:29,column:53}},type:"cond-expr",locations:[{start:{line:29,column:32},end:{line:29,column:44}},{start:{line:29,column:47},end:{line:29,column:53}}],line:29}},s:{"0":0,"1":0},f:{"0":0},b:{"0":[0,0],"1":[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"a547126b0cab277559cfddcca2cb17dabb1d8729"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_2ldxutcpt2=function(){return actualCoverage;};}return actualCoverage;}cov_2ldxutcpt2();import baseGet from'./.internal/baseGet.js';/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @see has, hasIn, set, unset
 * @example
 *
 * const object = { 'a': [{ 'b': { 'c': 3 } }] }
 *
 * get(object, 'a[0].b.c')
 * // => 3
 *
 * get(object, ['a', '0', 'b', 'c'])
 * // => 3
 *
 * get(object, 'a.b.c', 'default')
 * // => 'default'
 */function get(object,path,defaultValue){cov_2ldxutcpt2().f[0]++;const result=(cov_2ldxutcpt2().s[0]++,object==null?(cov_2ldxutcpt2().b[0][0]++,undefined):(cov_2ldxutcpt2().b[0][1]++,baseGet(object,path)));cov_2ldxutcpt2().s[1]++;return result===undefined?(cov_2ldxutcpt2().b[1][0]++,defaultValue):(cov_2ldxutcpt2().b[1][1]++,result);}export default get;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMmxkeHV0Y3B0MiIsImFjdHVhbENvdmVyYWdlIiwiYmFzZUdldCIsImdldCIsIm9iamVjdCIsInBhdGgiLCJkZWZhdWx0VmFsdWUiLCJmIiwicmVzdWx0IiwicyIsImIiLCJ1bmRlZmluZWQiXSwic291cmNlcyI6WyJnZXQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGJhc2VHZXQgZnJvbSAnLi8uaW50ZXJuYWwvYmFzZUdldC5qcydcblxuLyoqXG4gKiBHZXRzIHRoZSB2YWx1ZSBhdCBgcGF0aGAgb2YgYG9iamVjdGAuIElmIHRoZSByZXNvbHZlZCB2YWx1ZSBpc1xuICogYHVuZGVmaW5lZGAsIHRoZSBgZGVmYXVsdFZhbHVlYCBpcyByZXR1cm5lZCBpbiBpdHMgcGxhY2UuXG4gKlxuICogQHNpbmNlIDMuNy4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30gcGF0aCBUaGUgcGF0aCBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHBhcmFtIHsqfSBbZGVmYXVsdFZhbHVlXSBUaGUgdmFsdWUgcmV0dXJuZWQgZm9yIGB1bmRlZmluZWRgIHJlc29sdmVkIHZhbHVlcy5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSByZXNvbHZlZCB2YWx1ZS5cbiAqIEBzZWUgaGFzLCBoYXNJbiwgc2V0LCB1bnNldFxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBvYmplY3QgPSB7ICdhJzogW3sgJ2InOiB7ICdjJzogMyB9IH1dIH1cbiAqXG4gKiBnZXQob2JqZWN0LCAnYVswXS5iLmMnKVxuICogLy8gPT4gM1xuICpcbiAqIGdldChvYmplY3QsIFsnYScsICcwJywgJ2InLCAnYyddKVxuICogLy8gPT4gM1xuICpcbiAqIGdldChvYmplY3QsICdhLmIuYycsICdkZWZhdWx0JylcbiAqIC8vID0+ICdkZWZhdWx0J1xuICovXG5mdW5jdGlvbiBnZXQob2JqZWN0LCBwYXRoLCBkZWZhdWx0VmFsdWUpIHtcbiAgY29uc3QgcmVzdWx0ID0gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBiYXNlR2V0KG9iamVjdCwgcGF0aClcbiAgcmV0dXJuIHJlc3VsdCA9PT0gdW5kZWZpbmVkID8gZGVmYXVsdFZhbHVlIDogcmVzdWx0XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldFxuIl0sIm1hcHBpbmdzIjoiNHdDQWVZO0FBQUFBLGNBQUEsU0FBQUEsQ0FBQSxTQUFBQyxjQUFBLFdBQUFBLGNBQUEsRUFBQUQsY0FBQSxHQWZaLE1BQU8sQ0FBQUUsT0FBTyxLQUFNLHdCQUF3QixDQUU1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FDQSxRQUFTLENBQUFDLEdBQUdBLENBQUNDLE1BQU0sQ0FBRUMsSUFBSSxDQUFFQyxZQUFZLENBQUUsQ0FBQU4sY0FBQSxHQUFBTyxDQUFBLE1BQ3ZDLEtBQU0sQ0FBQUMsTUFBTSxFQUFBUixjQUFBLEdBQUFTLENBQUEsTUFBR0wsTUFBTSxFQUFJLElBQUksRUFBQUosY0FBQSxHQUFBVSxDQUFBLFNBQUdDLFNBQVMsR0FBQVgsY0FBQSxHQUFBVSxDQUFBLFNBQUdSLE9BQU8sQ0FBQ0UsTUFBTSxDQUFFQyxJQUFJLENBQUMsR0FBQUwsY0FBQSxHQUFBUyxDQUFBLE1BQ2pFLE1BQU8sQ0FBQUQsTUFBTSxHQUFLRyxTQUFTLEVBQUFYLGNBQUEsR0FBQVUsQ0FBQSxTQUFHSixZQUFZLEdBQUFOLGNBQUEsR0FBQVUsQ0FBQSxTQUFHRixNQUFNLEVBQ3JELENBRUEsY0FBZSxDQUFBTCxHQUFHIiwiaWdub3JlTGlzdCI6W119