/*jshint es5: true */
// helper function to determine if a character is a base token or modifier
module.exports = function isBase(char) {
  if (typeof char !== 'string') { throw new TypeError('isBase expects a single character string, instead found \'' + char + '\''); }
  if (char.length > 1) { throw new RangeError('isBase expects a single character string, instead found \'' + char + '\''); }
  if (
    (char.charCodeAt(0) > 48 && char.charCodeAt(0) < 58) ||
    (char.charCodeAt(0) > 62 && char.charCodeAt(0) < 91) ||
    (char.charCodeAt(0) > 96 && char.charCodeAt(0) < 123)
  ) { return true; }
  else { return false; }
}