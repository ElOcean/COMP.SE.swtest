function cov_2hehsvsf61(){var path="/Users/macepo/TTY/softatestaus/COMP.SE.swtest/src/castArray.js";var hash="11e0d7bcc76b5dff54131fa8c6e67b3b9eda957e";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"/Users/macepo/TTY/softatestaus/COMP.SE.swtest/src/castArray.js",statementMap:{"0":{start:{line:34,column:16},end:{line:34,column:23}},"1":{start:{line:35,column:2},end:{line:35,column:47}}},fnMap:{"0":{name:"castArray",decl:{start:{line:33,column:9},end:{line:33,column:18}},loc:{start:{line:33,column:28},end:{line:36,column:1}},line:33}},branchMap:{"0":{loc:{start:{line:35,column:9},end:{line:35,column:47}},type:"cond-expr",locations:[{start:{line:35,column:32},end:{line:35,column:37}},{start:{line:35,column:40},end:{line:35,column:47}}],line:35}},s:{"0":0,"1":0},f:{"0":0},b:{"0":[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"11e0d7bcc76b5dff54131fa8c6e67b3b9eda957e"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_2hehsvsf61=function(){return actualCoverage;};}return actualCoverage;}cov_2hehsvsf61();/**
 * Casts `value` as an array if it's not one.
 *
 * @since 4.4.0
 * @category Lang
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast array.
 * @example
 *
 * castArray(1)
 * // => [1]
 *
 * castArray({ 'a': 1 })
 * // => [{ 'a': 1 }]
 *
 * castArray('abc')
 * // => ['abc']
 *
 * castArray(null)
 * // => [null]
 *
 * castArray(undefined)
 * // => [undefined]
 *
 * castArray()
 * // => []
 *
 * const array = [1, 2, 3]
 * console.log(castArray(array) === array)
 * // => true
 */function castArray(...args){cov_2hehsvsf61().f[0]++;const value=(cov_2hehsvsf61().s[0]++,args[0]);cov_2hehsvsf61().s[1]++;return Array.isArray(value)?(cov_2hehsvsf61().b[0][0]++,value):(cov_2hehsvsf61().b[0][1]++,[value]);}export default castArray;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMmhlaHN2c2Y2MSIsImFjdHVhbENvdmVyYWdlIiwiY2FzdEFycmF5IiwiYXJncyIsImYiLCJ2YWx1ZSIsInMiLCJBcnJheSIsImlzQXJyYXkiLCJiIl0sInNvdXJjZXMiOlsiY2FzdEFycmF5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuLyoqXG4gKiBDYXN0cyBgdmFsdWVgIGFzIGFuIGFycmF5IGlmIGl0J3Mgbm90IG9uZS5cbiAqXG4gKiBAc2luY2UgNC40LjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBpbnNwZWN0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBjYXN0IGFycmF5LlxuICogQGV4YW1wbGVcbiAqXG4gKiBjYXN0QXJyYXkoMSlcbiAqIC8vID0+IFsxXVxuICpcbiAqIGNhc3RBcnJheSh7ICdhJzogMSB9KVxuICogLy8gPT4gW3sgJ2EnOiAxIH1dXG4gKlxuICogY2FzdEFycmF5KCdhYmMnKVxuICogLy8gPT4gWydhYmMnXVxuICpcbiAqIGNhc3RBcnJheShudWxsKVxuICogLy8gPT4gW251bGxdXG4gKlxuICogY2FzdEFycmF5KHVuZGVmaW5lZClcbiAqIC8vID0+IFt1bmRlZmluZWRdXG4gKlxuICogY2FzdEFycmF5KClcbiAqIC8vID0+IFtdXG4gKlxuICogY29uc3QgYXJyYXkgPSBbMSwgMiwgM11cbiAqIGNvbnNvbGUubG9nKGNhc3RBcnJheShhcnJheSkgPT09IGFycmF5KVxuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBjYXN0QXJyYXkoLi4uYXJncykge1xuICBjb25zdCB2YWx1ZSA9IGFyZ3NbMF1cbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWUgOiBbdmFsdWVdXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNhc3RBcnJheVxuIl0sIm1hcHBpbmdzIjoieWtDQWVZO0FBQUFBLGNBQUEsU0FBQUEsQ0FBQSxTQUFBQyxjQUFBLFdBQUFBLGNBQUEsRUFBQUQsY0FBQSxHQWRaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQ0EsUUFBUyxDQUFBRSxTQUFTQSxDQUFDLEdBQUdDLElBQUksQ0FBRSxDQUFBSCxjQUFBLEdBQUFJLENBQUEsTUFDMUIsS0FBTSxDQUFBQyxLQUFLLEVBQUFMLGNBQUEsR0FBQU0sQ0FBQSxNQUFHSCxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUFILGNBQUEsR0FBQU0sQ0FBQSxNQUNyQixNQUFPLENBQUFDLEtBQUssQ0FBQ0MsT0FBTyxDQUFDSCxLQUFLLENBQUMsRUFBQUwsY0FBQSxHQUFBUyxDQUFBLFNBQUdKLEtBQUssR0FBQUwsY0FBQSxHQUFBUyxDQUFBLFNBQUcsQ0FBQ0osS0FBSyxDQUFDLEVBQy9DLENBRUEsY0FBZSxDQUFBSCxTQUFTIiwiaWdub3JlTGlzdCI6W119