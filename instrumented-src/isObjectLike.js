function cov_1jpri5y3uc(){var path="/Users/macepo/TTY/softatestaus/COMP.SE.swtest/src/isObjectLike.js";var hash="75043069c34b0bc9f98b043848c14474dc7d6220";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"/Users/macepo/TTY/softatestaus/COMP.SE.swtest/src/isObjectLike.js",statementMap:{"0":{start:{line:24,column:2},end:{line:24,column:52}}},fnMap:{"0":{name:"isObjectLike",decl:{start:{line:23,column:9},end:{line:23,column:21}},loc:{start:{line:23,column:29},end:{line:25,column:1}},line:23}},branchMap:{"0":{loc:{start:{line:24,column:9},end:{line:24,column:52}},type:"binary-expr",locations:[{start:{line:24,column:9},end:{line:24,column:34}},{start:{line:24,column:38},end:{line:24,column:52}}],line:24}},s:{"0":0},f:{"0":0},b:{"0":[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"75043069c34b0bc9f98b043848c14474dc7d6220"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_1jpri5y3uc=function(){return actualCoverage;};}return actualCoverage;}cov_1jpri5y3uc();/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * isObjectLike({})
 * // => true
 *
 * isObjectLike([1, 2, 3])
 * // => true
 *
 * isObjectLike(Function)
 * // => false
 *
 * isObjectLike(null)
 * // => false
 */function isObjectLike(value){cov_1jpri5y3uc().f[0]++;cov_1jpri5y3uc().s[0]++;return(cov_1jpri5y3uc().b[0][0]++,typeof value==='object')&&(cov_1jpri5y3uc().b[0][1]++,value!==null);}export default isObjectLike;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMWpwcmk1eTN1YyIsImFjdHVhbENvdmVyYWdlIiwiaXNPYmplY3RMaWtlIiwidmFsdWUiLCJmIiwicyIsImIiXSwic291cmNlcyI6WyJpc09iamVjdExpa2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGlzT2JqZWN0TGlrZSh7fSlcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBpc09iamVjdExpa2UoWzEsIDIsIDNdKVxuICogLy8gPT4gdHJ1ZVxuICpcbiAqIGlzT2JqZWN0TGlrZShGdW5jdGlvbilcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogaXNPYmplY3RMaWtlKG51bGwpXG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgIT09IG51bGxcbn1cblxuZXhwb3J0IGRlZmF1bHQgaXNPYmplY3RMaWtlXG4iXSwibWFwcGluZ3MiOiJxaENBZVk7QUFBQUEsY0FBQSxTQUFBQSxDQUFBLFNBQUFDLGNBQUEsV0FBQUEsY0FBQSxFQUFBRCxjQUFBLEdBZlo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FDQSxRQUFTLENBQUFFLFlBQVlBLENBQUNDLEtBQUssQ0FBRSxDQUFBSCxjQUFBLEdBQUFJLENBQUEsTUFBQUosY0FBQSxHQUFBSyxDQUFBLE1BQzNCLE1BQU8sQ0FBQUwsY0FBQSxHQUFBTSxDQUFBLGVBQU8sQ0FBQUgsS0FBSyxHQUFLLFFBQVEsSUFBQUgsY0FBQSxHQUFBTSxDQUFBLFNBQUlILEtBQUssR0FBSyxJQUFJLEVBQ3BELENBRUEsY0FBZSxDQUFBRCxZQUFZIiwiaWdub3JlTGlzdCI6W119