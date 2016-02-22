module.exports = function (input) {
  if (typeof input !== 'string') {
    throw new TypeError('ipa.js expected string as input');
  }

  var tokenizer = require('./fn.tokenizer');

  tokens = tokenizer(input);

  tokens = tokens.map(function (e) {
    switch (e) {
      case 'b_<': return '\u0253';
      case 'd_<': return '\u0257';
      case 'd`': return '\u0256';
      case 'g_<': return '\u0261';
      case 'A': return '\u0251';
      case 'B': return '\u03B2';
      case 'B\\': return '\u0299';
      case 'G': return '\u0263';
      case 'G\\_<': return '\u029B';
      case 'G\\': return '\u0262';
      case 'H\\': return '\u029C';
      case 'I\\': return '\u1D7B';
      case 'J\\_<': return '\u0284';
      case 'J\\': return '\u025F';
      case 'K\\': return '\u026E';
      case 'L\\': return '\u029F';
      case 'M\\': return '\u0270';
      case 'N\\': return '\u0274';
      case 'O\\': return '\u0298';
      case 'R\\': return '\u0280';
      case 'U\\': return '\u1D7F';
      case 'X\\': return '\u0127';
      case 'C': return '\u00E7';
      case 'D': return '\u00F0';
      case 'E': return '\u025B';
      case 'F': return '\u0271';
      case 'H': return '\u0265';
      case 'I': return '\u026A';
      case 'J': return '\u0272';
      case 'K': return '\u026C';
      case 'L': return '\u028E';
      case 'M': return '\u026F';
      case 'N': return '\u014B';
      case 'O': return '\u0254';
      case 'P': return '\u028B';
      case 'Q': return '\u0252';
      case 'R': return '\u0281';
      case 'S': return '\u0283';
      case 'T': return '\u03B8';
      case 'U': return '\u028A';
      case 'V': return '\u028C';
      case 'W': return '\u028D';
      case 'X': return '\u03C7';
      case 'Y': return '\u028F';
      case 'Z': return '\u0292';
      default: return e;
    }
  });

  return tokens.join('');
};