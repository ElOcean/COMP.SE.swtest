function cov_2hbo5oziqa(){var path="/Users/macepo/TTY/softatestaus/COMP.SE.swtest/src/toInteger.js";var hash="f8dec718780055baf4bf64ce061552ffcdcbbe82";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"/Users/macepo/TTY/softatestaus/COMP.SE.swtest/src/toInteger.js",statementMap:{"0":{start:{line:29,column:17},end:{line:29,column:32}},"1":{start:{line:30,column:20},end:{line:30,column:30}},"2":{start:{line:32,column:2},end:{line:32,column:48}}},fnMap:{"0":{name:"toInteger",decl:{start:{line:28,column:9},end:{line:28,column:18}},loc:{start:{line:28,column:26},end:{line:33,column:1}},line:28}},branchMap:{"0":{loc:{start:{line:32,column:9},end:{line:32,column:48}},type:"cond-expr",locations:[{start:{line:32,column:21},end:{line:32,column:39}},{start:{line:32,column:42},end:{line:32,column:48}}],line:32}},s:{"0":0,"1":0,"2":0},f:{"0":0},b:{"0":[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"f8dec718780055baf4bf64ce061552ffcdcbbe82"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_2hbo5oziqa=function(){return actualCoverage;};}return actualCoverage;}cov_2hbo5oziqa();import toFinite from'./toFinite.js';/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @see isInteger, isNumber, toNumber
 * @example
 *
 * toInteger(3.2)
 * // => 3
 *
 * toInteger(Number.MIN_VALUE)
 * // => 0
 *
 * toInteger(Infinity)
 * // => 1.7976931348623157e+308
 *
 * toInteger('3.2')
 * // => 3
 */function toInteger(value){cov_2hbo5oziqa().f[0]++;const result=(cov_2hbo5oziqa().s[0]++,toFinite(value));const remainder=(cov_2hbo5oziqa().s[1]++,result%1);cov_2hbo5oziqa().s[2]++;return remainder?(cov_2hbo5oziqa().b[0][0]++,result-remainder):(cov_2hbo5oziqa().b[0][1]++,result);}export default toInteger;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMmhibzVvemlxYSIsImFjdHVhbENvdmVyYWdlIiwidG9GaW5pdGUiLCJ0b0ludGVnZXIiLCJ2YWx1ZSIsImYiLCJyZXN1bHQiLCJzIiwicmVtYWluZGVyIiwiYiJdLCJzb3VyY2VzIjpbInRvSW50ZWdlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdG9GaW5pdGUgZnJvbSAnLi90b0Zpbml0ZS5qcydcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGFuIGludGVnZXIuXG4gKlxuICogKipOb3RlOioqIFRoaXMgbWV0aG9kIGlzIGxvb3NlbHkgYmFzZWQgb25cbiAqIFtgVG9JbnRlZ2VyYF0oaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXRvaW50ZWdlcikuXG4gKlxuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBpbnRlZ2VyLlxuICogQHNlZSBpc0ludGVnZXIsIGlzTnVtYmVyLCB0b051bWJlclxuICogQGV4YW1wbGVcbiAqXG4gKiB0b0ludGVnZXIoMy4yKVxuICogLy8gPT4gM1xuICpcbiAqIHRvSW50ZWdlcihOdW1iZXIuTUlOX1ZBTFVFKVxuICogLy8gPT4gMFxuICpcbiAqIHRvSW50ZWdlcihJbmZpbml0eSlcbiAqIC8vID0+IDEuNzk3NjkzMTM0ODYyMzE1N2UrMzA4XG4gKlxuICogdG9JbnRlZ2VyKCczLjInKVxuICogLy8gPT4gM1xuICovXG5mdW5jdGlvbiB0b0ludGVnZXIodmFsdWUpIHtcbiAgY29uc3QgcmVzdWx0ID0gdG9GaW5pdGUodmFsdWUpXG4gIGNvbnN0IHJlbWFpbmRlciA9IHJlc3VsdCAlIDFcblxuICByZXR1cm4gcmVtYWluZGVyID8gcmVzdWx0IC0gcmVtYWluZGVyIDogcmVzdWx0XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRvSW50ZWdlclxuIl0sIm1hcHBpbmdzIjoidW9DQWVZO0FBQUFBLGNBQUEsU0FBQUEsQ0FBQSxTQUFBQyxjQUFBLFdBQUFBLGNBQUEsRUFBQUQsY0FBQSxHQWZaLE1BQU8sQ0FBQUUsUUFBUSxLQUFNLGVBQWUsQ0FFcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FDQSxRQUFTLENBQUFDLFNBQVNBLENBQUNDLEtBQUssQ0FBRSxDQUFBSixjQUFBLEdBQUFLLENBQUEsTUFDeEIsS0FBTSxDQUFBQyxNQUFNLEVBQUFOLGNBQUEsR0FBQU8sQ0FBQSxNQUFHTCxRQUFRLENBQUNFLEtBQUssQ0FBQyxFQUM5QixLQUFNLENBQUFJLFNBQVMsRUFBQVIsY0FBQSxHQUFBTyxDQUFBLE1BQUdELE1BQU0sQ0FBRyxDQUFDLEVBQUFOLGNBQUEsR0FBQU8sQ0FBQSxNQUU1QixNQUFPLENBQUFDLFNBQVMsRUFBQVIsY0FBQSxHQUFBUyxDQUFBLFNBQUdILE1BQU0sQ0FBR0UsU0FBUyxHQUFBUixjQUFBLEdBQUFTLENBQUEsU0FBR0gsTUFBTSxFQUNoRCxDQUVBLGNBQWUsQ0FBQUgsU0FBUyIsImlnbm9yZUxpc3QiOltdfQ==