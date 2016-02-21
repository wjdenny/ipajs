module.exports = function (input) {
  'use strict';

  var isBase = require('./fn.isBase.js');
  var i, buffer = "", tokens = [], prev;

  for (i = 0; i < input.length; i++) {
    if (isBase(input[i])) {
      if (prev === '_') { buffer = buffer + input[i]; }
      else {
        if (buffer.length) { tokens.push(buffer); }
        buffer = input[i];
      }
    }
    else { buffer = buffer + input[i]; }
    prev = input[i];
  }

  tokens.push(buffer);

  return tokens;
}