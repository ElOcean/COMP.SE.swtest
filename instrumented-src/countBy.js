function cov_13kd5shxos(){var path="/Users/macepo/TTY/softatestaus/COMP.SE.swtest/src/countBy.js";var hash="801e449aeec472acd04d753cc87fed2e3ffae614";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"/Users/macepo/TTY/softatestaus/COMP.SE.swtest/src/countBy.js",statementMap:{"0":{start:{line:5,column:23},end:{line:5,column:54}},"1":{start:{line:30,column:2},end:{line:38,column:8}},"2":{start:{line:31,column:4},end:{line:31,column:25}},"3":{start:{line:32,column:4},end:{line:36,column:5}},"4":{start:{line:33,column:6},end:{line:33,column:19}},"5":{start:{line:35,column:6},end:{line:35,column:37}},"6":{start:{line:37,column:4},end:{line:37,column:17}}},fnMap:{"0":{name:"countBy",decl:{start:{line:29,column:9},end:{line:29,column:16}},loc:{start:{line:29,column:39},end:{line:39,column:1}},line:29},"1":{name:"(anonymous_1)",decl:{start:{line:30,column:28},end:{line:30,column:29}},loc:{start:{line:30,column:52},end:{line:38,column:3}},line:30}},branchMap:{"0":{loc:{start:{line:32,column:4},end:{line:36,column:5}},type:"if",locations:[{start:{line:32,column:4},end:{line:36,column:5}},{start:{line:34,column:11},end:{line:36,column:5}}],line:32}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0},f:{"0":0,"1":0},b:{"0":[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"801e449aeec472acd04d753cc87fed2e3ffae614"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_13kd5shxos=function(){return actualCoverage;};}return actualCoverage;}cov_13kd5shxos();import baseAssignValue from'./.internal/baseAssignValue.js';import reduce from'./reduce.js';/** Used to check objects for own properties. */const hasOwnProperty=(cov_13kd5shxos().s[0]++,Object.prototype.hasOwnProperty);/**
 * Creates an object composed of keys generated from the results of running
 * each element of `collection` thru `iteratee`. The corresponding value of
 * each key is the number of times the key was returned by `iteratee`. The
 * iteratee is invoked with one argument: (value).
 *
 * @since 0.5.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The iteratee to transform keys.
 * @returns {Object} Returns the composed aggregate object.
 * @example
 *
 * const users = [
 *   { 'user': 'barney', 'active': true },
 *   { 'user': 'betty', 'active': true },
 *   { 'user': 'fred', 'active': false }
 * ]
 *
 * countBy(users, value => value.active);
 * // => { 'true': 2, 'false': 1 }
 */function countBy(collection,iteratee){cov_13kd5shxos().f[0]++;cov_13kd5shxos().s[1]++;return reduce(collection,(result,value,key)=>{cov_13kd5shxos().f[1]++;cov_13kd5shxos().s[2]++;key=iteratee(value);cov_13kd5shxos().s[3]++;if(hasOwnProperty.call(result,key)){cov_13kd5shxos().b[0][0]++;cov_13kd5shxos().s[4]++;++result[key];}else{cov_13kd5shxos().b[0][1]++;cov_13kd5shxos().s[5]++;baseAssignValue(result,key,0);}cov_13kd5shxos().s[6]++;return result;},{});}export default countBy;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMTNrZDVzaHhvcyIsImFjdHVhbENvdmVyYWdlIiwiYmFzZUFzc2lnblZhbHVlIiwicmVkdWNlIiwiaGFzT3duUHJvcGVydHkiLCJzIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiY291bnRCeSIsImNvbGxlY3Rpb24iLCJpdGVyYXRlZSIsImYiLCJyZXN1bHQiLCJ2YWx1ZSIsImtleSIsImNhbGwiLCJiIl0sInNvdXJjZXMiOlsiY291bnRCeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYmFzZUFzc2lnblZhbHVlIGZyb20gJy4vLmludGVybmFsL2Jhc2VBc3NpZ25WYWx1ZS5qcydcbmltcG9ydCByZWR1Y2UgZnJvbSAnLi9yZWR1Y2UuanMnXG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xuY29uc3QgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBvYmplY3QgY29tcG9zZWQgb2Yga2V5cyBnZW5lcmF0ZWQgZnJvbSB0aGUgcmVzdWx0cyBvZiBydW5uaW5nXG4gKiBlYWNoIGVsZW1lbnQgb2YgYGNvbGxlY3Rpb25gIHRocnUgYGl0ZXJhdGVlYC4gVGhlIGNvcnJlc3BvbmRpbmcgdmFsdWUgb2ZcbiAqIGVhY2gga2V5IGlzIHRoZSBudW1iZXIgb2YgdGltZXMgdGhlIGtleSB3YXMgcmV0dXJuZWQgYnkgYGl0ZXJhdGVlYC4gVGhlXG4gKiBpdGVyYXRlZSBpcyBpbnZva2VkIHdpdGggb25lIGFyZ3VtZW50OiAodmFsdWUpLlxuICpcbiAqIEBzaW5jZSAwLjUuMFxuICogQGNhdGVnb3J5IENvbGxlY3Rpb25cbiAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fSBjb2xsZWN0aW9uIFRoZSBjb2xsZWN0aW9uIHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBpdGVyYXRlZSB0byB0cmFuc2Zvcm0ga2V5cy5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNvbXBvc2VkIGFnZ3JlZ2F0ZSBvYmplY3QuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IHVzZXJzID0gW1xuICogICB7ICd1c2VyJzogJ2Jhcm5leScsICdhY3RpdmUnOiB0cnVlIH0sXG4gKiAgIHsgJ3VzZXInOiAnYmV0dHknLCAnYWN0aXZlJzogdHJ1ZSB9LFxuICogICB7ICd1c2VyJzogJ2ZyZWQnLCAnYWN0aXZlJzogZmFsc2UgfVxuICogXVxuICpcbiAqIGNvdW50QnkodXNlcnMsIHZhbHVlID0+IHZhbHVlLmFjdGl2ZSk7XG4gKiAvLyA9PiB7ICd0cnVlJzogMiwgJ2ZhbHNlJzogMSB9XG4gKi9cbmZ1bmN0aW9uIGNvdW50QnkoY29sbGVjdGlvbiwgaXRlcmF0ZWUpIHtcbiAgcmV0dXJuIHJlZHVjZShjb2xsZWN0aW9uLCAocmVzdWx0LCB2YWx1ZSwga2V5KSA9PiB7XG4gICAga2V5ID0gaXRlcmF0ZWUodmFsdWUpXG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwocmVzdWx0LCBrZXkpKSB7XG4gICAgICArK3Jlc3VsdFtrZXldXG4gICAgfSBlbHNlIHtcbiAgICAgIGJhc2VBc3NpZ25WYWx1ZShyZXN1bHQsIGtleSwgMClcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9LCB7fSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY291bnRCeVxuIl0sIm1hcHBpbmdzIjoiOC9DQWVZO0FBQUFBLGNBQUEsU0FBQUEsQ0FBQSxTQUFBQyxjQUFBLFdBQUFBLGNBQUEsRUFBQUQsY0FBQSxHQWZaLE1BQU8sQ0FBQUUsZUFBZSxLQUFNLGdDQUFnQyxDQUM1RCxNQUFPLENBQUFDLE1BQU0sS0FBTSxhQUFhLENBRWhDLGdEQUNBLEtBQU0sQ0FBQUMsY0FBYyxFQUFBSixjQUFBLEdBQUFLLENBQUEsTUFBR0MsTUFBTSxDQUFDQyxTQUFTLENBQUNILGNBQWMsRUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FDQSxRQUFTLENBQUFJLE9BQU9BLENBQUNDLFVBQVUsQ0FBRUMsUUFBUSxDQUFFLENBQUFWLGNBQUEsR0FBQVcsQ0FBQSxNQUFBWCxjQUFBLEdBQUFLLENBQUEsTUFDckMsTUFBTyxDQUFBRixNQUFNLENBQUNNLFVBQVUsQ0FBRSxDQUFDRyxNQUFNLENBQUVDLEtBQUssQ0FBRUMsR0FBRyxHQUFLLENBQUFkLGNBQUEsR0FBQVcsQ0FBQSxNQUFBWCxjQUFBLEdBQUFLLENBQUEsTUFDaERTLEdBQUcsQ0FBR0osUUFBUSxDQUFDRyxLQUFLLENBQUMsQ0FBQWIsY0FBQSxHQUFBSyxDQUFBLE1BQ3JCLEdBQUlELGNBQWMsQ0FBQ1csSUFBSSxDQUFDSCxNQUFNLENBQUVFLEdBQUcsQ0FBQyxDQUFFLENBQUFkLGNBQUEsR0FBQWdCLENBQUEsU0FBQWhCLGNBQUEsR0FBQUssQ0FBQSxNQUNwQyxFQUFFTyxNQUFNLENBQUNFLEdBQUcsQ0FBQyxDQUNmLENBQUMsSUFBTSxDQUFBZCxjQUFBLEdBQUFnQixDQUFBLFNBQUFoQixjQUFBLEdBQUFLLENBQUEsTUFDTEgsZUFBZSxDQUFDVSxNQUFNLENBQUVFLEdBQUcsQ0FBRSxDQUFDLENBQUMsQ0FDakMsQ0FBQ2QsY0FBQSxHQUFBSyxDQUFBLE1BQ0QsTUFBTyxDQUFBTyxNQUFNLENBQ2YsQ0FBQyxDQUFFLENBQUMsQ0FBQyxDQUFDLENBQ1IsQ0FFQSxjQUFlLENBQUFKLE9BQU8iLCJpZ25vcmVMaXN0IjpbXX0=