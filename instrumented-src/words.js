function cov_2ohpri2owr(){var path="/Users/macepo/TTY/softatestaus/COMP.SE.swtest/src/words.js";var hash="0a1351357ef5f029b74979a68b10eaff5468ec1f";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"/Users/macepo/TTY/softatestaus/COMP.SE.swtest/src/words.js",statementMap:{"0":{start:{line:3,column:23},end:{line:5,column:1}},"1":{start:{line:8,column:20},end:{line:8,column:63}},"2":{start:{line:11,column:2},end:{line:11,column:34}},"3":{start:{line:31,column:2},end:{line:34,column:3}},"4":{start:{line:32,column:19},end:{line:32,column:85}},"5":{start:{line:33,column:4},end:{line:33,column:23}},"6":{start:{line:35,column:2},end:{line:35,column:36}}},fnMap:{"0":{name:"asciiWords",decl:{start:{line:10,column:9},end:{line:10,column:19}},loc:{start:{line:10,column:28},end:{line:12,column:1}},line:10},"1":{name:"words",decl:{start:{line:30,column:9},end:{line:30,column:14}},loc:{start:{line:30,column:32},end:{line:36,column:1}},line:30}},branchMap:{"0":{loc:{start:{line:31,column:2},end:{line:34,column:3}},type:"if",locations:[{start:{line:31,column:2},end:{line:34,column:3}},{start:{line:undefined,column:undefined},end:{line:undefined,column:undefined}}],line:31},"1":{loc:{start:{line:32,column:19},end:{line:32,column:85}},type:"cond-expr",locations:[{start:{line:32,column:44},end:{line:32,column:64}},{start:{line:32,column:67},end:{line:32,column:85}}],line:32},"2":{loc:{start:{line:33,column:11},end:{line:33,column:23}},type:"binary-expr",locations:[{start:{line:33,column:11},end:{line:33,column:17}},{start:{line:33,column:21},end:{line:33,column:23}}],line:33},"3":{loc:{start:{line:35,column:9},end:{line:35,column:36}},type:"binary-expr",locations:[{start:{line:35,column:9},end:{line:35,column:30}},{start:{line:35,column:34},end:{line:35,column:36}}],line:35}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0},f:{"0":0,"1":0},b:{"0":[0,0],"1":[0,0],"2":[0,0],"3":[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"0a1351357ef5f029b74979a68b10eaff5468ec1f"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_2ohpri2owr=function(){return actualCoverage;};}return actualCoverage;}cov_2ohpri2owr();import unicodeWords from'./.internal/unicodeWords.js';const hasUnicodeWord=(cov_2ohpri2owr().s[0]++,RegExp.prototype.test.bind(/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/));/** Used to match words composed of alphanumeric characters. */const reAsciiWord=(cov_2ohpri2owr().s[1]++,/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g);function asciiWords(string){cov_2ohpri2owr().f[0]++;cov_2ohpri2owr().s[2]++;return string.match(reAsciiWord);}/**
 * Splits `string` into an array of its words.
 *
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to inspect.
 * @param {RegExp|string} [pattern] The pattern to match words.
 * @returns {Array} Returns the words of `string`.
 * @example
 *
 * words('fred, barney, & pebbles')
 * // => ['fred', 'barney', 'pebbles']
 *
 * words('fred, barney, & pebbles', /[^, ]+/g)
 * // => ['fred', 'barney', '&', 'pebbles']
 */function words(string,pattern){cov_2ohpri2owr().f[1]++;cov_2ohpri2owr().s[3]++;if(pattern===undefined){cov_2ohpri2owr().b[0][0]++;const result=(cov_2ohpri2owr().s[4]++,hasUnicodeWord(string)?(cov_2ohpri2owr().b[1][0]++,unicodeWords(string)):(cov_2ohpri2owr().b[1][1]++,asciiWords(string)));cov_2ohpri2owr().s[5]++;return(cov_2ohpri2owr().b[2][0]++,result)||(cov_2ohpri2owr().b[2][1]++,[]);}else{cov_2ohpri2owr().b[0][1]++;}cov_2ohpri2owr().s[6]++;return(cov_2ohpri2owr().b[3][0]++,string.match(pattern))||(cov_2ohpri2owr().b[3][1]++,[]);}export default words;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMm9ocHJpMm93ciIsImFjdHVhbENvdmVyYWdlIiwidW5pY29kZVdvcmRzIiwiaGFzVW5pY29kZVdvcmQiLCJzIiwiUmVnRXhwIiwicHJvdG90eXBlIiwidGVzdCIsImJpbmQiLCJyZUFzY2lpV29yZCIsImFzY2lpV29yZHMiLCJzdHJpbmciLCJmIiwibWF0Y2giLCJ3b3JkcyIsInBhdHRlcm4iLCJ1bmRlZmluZWQiLCJiIiwicmVzdWx0Il0sInNvdXJjZXMiOlsid29yZHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVuaWNvZGVXb3JkcyBmcm9tICcuLy5pbnRlcm5hbC91bmljb2RlV29yZHMuanMnXG5cbmNvbnN0IGhhc1VuaWNvZGVXb3JkID0gUmVnRXhwLnByb3RvdHlwZS50ZXN0LmJpbmQoXG4gIC9bYS16XVtBLVpdfFtBLVpdezJ9W2Etel18WzAtOV1bYS16QS1aXXxbYS16QS1aXVswLTldfFteYS16QS1aMC05IF0vXG4pXG5cbi8qKiBVc2VkIHRvIG1hdGNoIHdvcmRzIGNvbXBvc2VkIG9mIGFscGhhbnVtZXJpYyBjaGFyYWN0ZXJzLiAqL1xuY29uc3QgcmVBc2NpaVdvcmQgPSAvW15cXHgwMC1cXHgyZlxceDNhLVxceDQwXFx4NWItXFx4NjBcXHg3Yi1cXHg3Zl0rL2dcblxuZnVuY3Rpb24gYXNjaWlXb3JkcyhzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5tYXRjaChyZUFzY2lpV29yZClcbn1cblxuLyoqXG4gKiBTcGxpdHMgYHN0cmluZ2AgaW50byBhbiBhcnJheSBvZiBpdHMgd29yZHMuXG4gKlxuICogQHNpbmNlIDMuMC4wXG4gKiBAY2F0ZWdvcnkgU3RyaW5nXG4gKiBAcGFyYW0ge3N0cmluZ30gW3N0cmluZz0nJ10gVGhlIHN0cmluZyB0byBpbnNwZWN0LlxuICogQHBhcmFtIHtSZWdFeHB8c3RyaW5nfSBbcGF0dGVybl0gVGhlIHBhdHRlcm4gdG8gbWF0Y2ggd29yZHMuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHdvcmRzIG9mIGBzdHJpbmdgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB3b3JkcygnZnJlZCwgYmFybmV5LCAmIHBlYmJsZXMnKVxuICogLy8gPT4gWydmcmVkJywgJ2Jhcm5leScsICdwZWJibGVzJ11cbiAqXG4gKiB3b3JkcygnZnJlZCwgYmFybmV5LCAmIHBlYmJsZXMnLCAvW14sIF0rL2cpXG4gKiAvLyA9PiBbJ2ZyZWQnLCAnYmFybmV5JywgJyYnLCAncGViYmxlcyddXG4gKi9cbmZ1bmN0aW9uIHdvcmRzKHN0cmluZywgcGF0dGVybikge1xuICBpZiAocGF0dGVybiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gaGFzVW5pY29kZVdvcmQoc3RyaW5nKSA/IHVuaWNvZGVXb3JkcyhzdHJpbmcpIDogYXNjaWlXb3JkcyhzdHJpbmcpXG4gICAgcmV0dXJuIHJlc3VsdCB8fCBbXVxuICB9XG4gIHJldHVybiBzdHJpbmcubWF0Y2gocGF0dGVybikgfHwgW11cbn1cblxuZXhwb3J0IGRlZmF1bHQgd29yZHNcbiJdLCJtYXBwaW5ncyI6ImtwRUFlWTtBQUFBQSxjQUFBLFNBQUFBLENBQUEsU0FBQUMsY0FBQSxXQUFBQSxjQUFBLEVBQUFELGNBQUEsR0FmWixNQUFPLENBQUFFLFlBQVksS0FBTSw2QkFBNkIsQ0FFdEQsS0FBTSxDQUFBQyxjQUFjLEVBQUFILGNBQUEsR0FBQUksQ0FBQSxNQUFHQyxNQUFNLENBQUNDLFNBQVMsQ0FBQ0MsSUFBSSxDQUFDQyxJQUFJLENBQy9DLG9FQUNGLENBQUMsRUFFRCwrREFDQSxLQUFNLENBQUFDLFdBQVcsRUFBQVQsY0FBQSxHQUFBSSxDQUFBLE1BQUcsMkNBQTJDLEVBRS9ELFFBQVMsQ0FBQU0sVUFBVUEsQ0FBQ0MsTUFBTSxDQUFFLENBQUFYLGNBQUEsR0FBQVksQ0FBQSxNQUFBWixjQUFBLEdBQUFJLENBQUEsTUFDMUIsTUFBTyxDQUFBTyxNQUFNLENBQUNFLEtBQUssQ0FBQ0osV0FBVyxDQUFDLENBQ2xDLENBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FDQSxRQUFTLENBQUFLLEtBQUtBLENBQUNILE1BQU0sQ0FBRUksT0FBTyxDQUFFLENBQUFmLGNBQUEsR0FBQVksQ0FBQSxNQUFBWixjQUFBLEdBQUFJLENBQUEsTUFDOUIsR0FBSVcsT0FBTyxHQUFLQyxTQUFTLENBQUUsQ0FBQWhCLGNBQUEsR0FBQWlCLENBQUEsU0FDekIsS0FBTSxDQUFBQyxNQUFNLEVBQUFsQixjQUFBLEdBQUFJLENBQUEsTUFBR0QsY0FBYyxDQUFDUSxNQUFNLENBQUMsRUFBQVgsY0FBQSxHQUFBaUIsQ0FBQSxTQUFHZixZQUFZLENBQUNTLE1BQU0sQ0FBQyxHQUFBWCxjQUFBLEdBQUFpQixDQUFBLFNBQUdQLFVBQVUsQ0FBQ0MsTUFBTSxDQUFDLEdBQUFYLGNBQUEsR0FBQUksQ0FBQSxNQUNqRixNQUFPLENBQUFKLGNBQUEsR0FBQWlCLENBQUEsU0FBQUMsTUFBTSxJQUFBbEIsY0FBQSxHQUFBaUIsQ0FBQSxTQUFJLEVBQUUsRUFDckIsQ0FBQyxLQUFBakIsY0FBQSxHQUFBaUIsQ0FBQSxVQUFBakIsY0FBQSxHQUFBSSxDQUFBLE1BQ0QsTUFBTyxDQUFBSixjQUFBLEdBQUFpQixDQUFBLFNBQUFOLE1BQU0sQ0FBQ0UsS0FBSyxDQUFDRSxPQUFPLENBQUMsSUFBQWYsY0FBQSxHQUFBaUIsQ0FBQSxTQUFJLEVBQUUsRUFDcEMsQ0FFQSxjQUFlLENBQUFILEtBQUsiLCJpZ25vcmVMaXN0IjpbXX0=