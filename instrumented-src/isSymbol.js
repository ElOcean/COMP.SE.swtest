function cov_1jsr1pc92e(){var path="/Users/macepo/TTY/softatestaus/COMP.SE.swtest/src/isSymbol.js";var hash="6ffc27a727da2f81da29a42a14f10712e3608e7c";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"/Users/macepo/TTY/softatestaus/COMP.SE.swtest/src/isSymbol.js",statementMap:{"0":{start:{line:19,column:15},end:{line:19,column:27}},"1":{start:{line:20,column:2},end:{line:20,column:103}}},fnMap:{"0":{name:"isSymbol",decl:{start:{line:18,column:9},end:{line:18,column:17}},loc:{start:{line:18,column:25},end:{line:21,column:1}},line:18}},branchMap:{"0":{loc:{start:{line:20,column:9},end:{line:20,column:103}},type:"binary-expr",locations:[{start:{line:20,column:9},end:{line:20,column:25}},{start:{line:20,column:30},end:{line:20,column:47}},{start:{line:20,column:51},end:{line:20,column:64}},{start:{line:20,column:68},end:{line:20,column:102}}],line:20}},s:{"0":0,"1":0},f:{"0":0},b:{"0":[0,0,0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"6ffc27a727da2f81da29a42a14f10712e3608e7c"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_1jsr1pc92e=function(){return actualCoverage;};}return actualCoverage;}cov_1jsr1pc92e();import getTag from'./.internal/getTag.js';/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * isSymbol(Symbol.iterator)
 * // => true
 *
 * isSymbol('abc')
 * // => false
 */function isSymbol(value){cov_1jsr1pc92e().f[0]++;const type=(cov_1jsr1pc92e().s[0]++,typeof value);cov_1jsr1pc92e().s[1]++;return(cov_1jsr1pc92e().b[0][0]++,type=='symbol')||(cov_1jsr1pc92e().b[0][1]++,type==='object')&&(cov_1jsr1pc92e().b[0][2]++,value!=null)&&(cov_1jsr1pc92e().b[0][3]++,getTag(value)=='[object Symbol]');}export default isSymbol;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMWpzcjFwYzkyZSIsImFjdHVhbENvdmVyYWdlIiwiZ2V0VGFnIiwiaXNTeW1ib2wiLCJ2YWx1ZSIsImYiLCJ0eXBlIiwicyIsImIiXSwic291cmNlcyI6WyJpc1N5bWJvbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ2V0VGFnIGZyb20gJy4vLmludGVybmFsL2dldFRhZy5qcydcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYFN5bWJvbGAgcHJpbWl0aXZlIG9yIG9iamVjdC5cbiAqXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgc3ltYm9sLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGlzU3ltYm9sKFN5bWJvbC5pdGVyYXRvcilcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBpc1N5bWJvbCgnYWJjJylcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3ltYm9sKHZhbHVlKSB7XG4gIGNvbnN0IHR5cGUgPSB0eXBlb2YgdmFsdWVcbiAgcmV0dXJuIHR5cGUgPT0gJ3N5bWJvbCcgfHwgKHR5cGUgPT09ICdvYmplY3QnICYmIHZhbHVlICE9IG51bGwgJiYgZ2V0VGFnKHZhbHVlKSA9PSAnW29iamVjdCBTeW1ib2xdJylcbn1cblxuZXhwb3J0IGRlZmF1bHQgaXNTeW1ib2xcbiJdLCJtYXBwaW5ncyI6InNyQ0FlWTtBQUFBQSxjQUFBLFNBQUFBLENBQUEsU0FBQUMsY0FBQSxXQUFBQSxjQUFBLEVBQUFELGNBQUEsR0FmWixNQUFPLENBQUFFLE1BQU0sS0FBTSx1QkFBdUIsQ0FFMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQ0EsUUFBUyxDQUFBQyxRQUFRQSxDQUFDQyxLQUFLLENBQUUsQ0FBQUosY0FBQSxHQUFBSyxDQUFBLE1BQ3ZCLEtBQU0sQ0FBQUMsSUFBSSxFQUFBTixjQUFBLEdBQUFPLENBQUEsTUFBRyxNQUFPLENBQUFILEtBQUssRUFBQUosY0FBQSxHQUFBTyxDQUFBLE1BQ3pCLE1BQU8sQ0FBQVAsY0FBQSxHQUFBUSxDQUFBLFNBQUFGLElBQUksRUFBSSxRQUFRLEdBQUssQ0FBQU4sY0FBQSxHQUFBUSxDQUFBLFNBQUFGLElBQUksR0FBSyxRQUFRLElBQUFOLGNBQUEsR0FBQVEsQ0FBQSxTQUFJSixLQUFLLEVBQUksSUFBSSxJQUFBSixjQUFBLEdBQUFRLENBQUEsU0FBSU4sTUFBTSxDQUFDRSxLQUFLLENBQUMsRUFBSSxpQkFBaUIsQ0FBQyxDQUN2RyxDQUVBLGNBQWUsQ0FBQUQsUUFBUSIsImlnbm9yZUxpc3QiOltdfQ==