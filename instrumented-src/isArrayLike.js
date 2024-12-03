function cov_2r1uy3hag6(){var path="/Users/macepo/TTY/softatestaus/COMP.SE.swtest/src/isArrayLike.js";var hash="778af65f7f24baac1d62c8ed4206574da43a109e";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"/Users/macepo/TTY/softatestaus/COMP.SE.swtest/src/isArrayLike.js",statementMap:{"0":{start:{line:27,column:2},end:{line:27,column:79}}},fnMap:{"0":{name:"isArrayLike",decl:{start:{line:26,column:9},end:{line:26,column:20}},loc:{start:{line:26,column:28},end:{line:28,column:1}},line:26}},branchMap:{"0":{loc:{start:{line:27,column:9},end:{line:27,column:79}},type:"binary-expr",locations:[{start:{line:27,column:9},end:{line:27,column:22}},{start:{line:27,column:26},end:{line:27,column:53}},{start:{line:27,column:57},end:{line:27,column:79}}],line:27}},s:{"0":0},f:{"0":0},b:{"0":[0,0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"778af65f7f24baac1d62c8ed4206574da43a109e"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_2r1uy3hag6=function(){return actualCoverage;};}return actualCoverage;}cov_2r1uy3hag6();import isLength from'./isLength.js';/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * isArrayLike([1, 2, 3])
 * // => true
 *
 * isArrayLike(document.body.children)
 * // => true
 *
 * isArrayLike('abc')
 * // => true
 *
 * isArrayLike(Function)
 * // => false
 */function isArrayLike(value){cov_2r1uy3hag6().f[0]++;cov_2r1uy3hag6().s[0]++;return(cov_2r1uy3hag6().b[0][0]++,value!=null)&&(cov_2r1uy3hag6().b[0][1]++,typeof value!=='function')&&(cov_2r1uy3hag6().b[0][2]++,isLength(value.length));}export default isArrayLike;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMnIxdXkzaGFnNiIsImFjdHVhbENvdmVyYWdlIiwiaXNMZW5ndGgiLCJpc0FycmF5TGlrZSIsInZhbHVlIiwiZiIsInMiLCJiIiwibGVuZ3RoIl0sInNvdXJjZXMiOlsiaXNBcnJheUxpa2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGlzTGVuZ3RoIGZyb20gJy4vaXNMZW5ndGguanMnXG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZS4gQSB2YWx1ZSBpcyBjb25zaWRlcmVkIGFycmF5LWxpa2UgaWYgaXQnc1xuICogbm90IGEgZnVuY3Rpb24gYW5kIGhhcyBhIGB2YWx1ZS5sZW5ndGhgIHRoYXQncyBhbiBpbnRlZ2VyIGdyZWF0ZXIgdGhhbiBvclxuICogZXF1YWwgdG8gYDBgIGFuZCBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gYE51bWJlci5NQVhfU0FGRV9JTlRFR0VSYC5cbiAqXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogaXNBcnJheUxpa2UoWzEsIDIsIDNdKVxuICogLy8gPT4gdHJ1ZVxuICpcbiAqIGlzQXJyYXlMaWtlKGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pXG4gKiAvLyA9PiB0cnVlXG4gKlxuICogaXNBcnJheUxpa2UoJ2FiYycpXG4gKiAvLyA9PiB0cnVlXG4gKlxuICogaXNBcnJheUxpa2UoRnVuY3Rpb24pXG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgIT09ICdmdW5jdGlvbicgJiYgaXNMZW5ndGgodmFsdWUubGVuZ3RoKVxufVxuXG5leHBvcnQgZGVmYXVsdCBpc0FycmF5TGlrZVxuIl0sIm1hcHBpbmdzIjoid2tDQWVZO0FBQUFBLGNBQUEsU0FBQUEsQ0FBQSxTQUFBQyxjQUFBLFdBQUFBLGNBQUEsRUFBQUQsY0FBQSxHQWZaLE1BQU8sQ0FBQUUsUUFBUSxLQUFNLGVBQWUsQ0FFcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUNBLFFBQVMsQ0FBQUMsV0FBV0EsQ0FBQ0MsS0FBSyxDQUFFLENBQUFKLGNBQUEsR0FBQUssQ0FBQSxNQUFBTCxjQUFBLEdBQUFNLENBQUEsTUFDMUIsTUFBTyxDQUFBTixjQUFBLEdBQUFPLENBQUEsU0FBQUgsS0FBSyxFQUFJLElBQUksSUFBQUosY0FBQSxHQUFBTyxDQUFBLFNBQUksTUFBTyxDQUFBSCxLQUFLLEdBQUssVUFBVSxJQUFBSixjQUFBLEdBQUFPLENBQUEsU0FBSUwsUUFBUSxDQUFDRSxLQUFLLENBQUNJLE1BQU0sQ0FBQyxFQUMvRSxDQUVBLGNBQWUsQ0FBQUwsV0FBVyIsImlnbm9yZUxpc3QiOltdfQ==