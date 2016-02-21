const xsMap = {
  'b_<': '\u0253',
  'd_<': '\u0257',
  'd`': '\u0256',
  'g_<': '\u0260',
  'h\\': '\u0266',
  'j\\': '\u029D',
  'l`': '\u026D',
  'l\\': '\u027A',
  'n`': '\u0273',
  'p\\' : '\u0278',
  'r`': '\u027D',
  'r\\': '\u0279',
  'r\\`': '\u027B',
  's`': '\u0282',
  's\\': '\u0255',
  't`': '\u0288',
  'v\\': '\u028B',
  'x\\': '\u0267',
  'z`': '\u0290',
  'z\\': '\u0291',
  'A': '\u0251',
  'B': '\u03B2',
  'B\\': '\u0299',
  'G': '\u0263',
  'G\\_<': '\u029B',
  'G\\': '\u0262',
  'H\\': '\u029C',
  'I\\': '\u1D7B',
  'J\\_<': '\u0284',
  'J\\': '\u025F',
  'K\\': '\u026E',
  'L\\': '\u029F',
  'M\\': '\u0270',
  'N\\': '\u0274',
  'O\\': '\u0298',
  'R\\': '\u0280',
  'U\\': '\u1D7F',
  'X\\': '\u0127',
  'C': '\u00E7',
  'D': '\u00F0',
  'E': '\u025B',
  'F': '\u0271',
  'H': '\u0265',
  'I': '\u026A',
  'J': '\u0272',
  'K': '\u026C',
  'L': '\u028E',
  'M': '\u026F',
  'N': '\u014B',
  'O': '\u0254',
  'P': '\u028B',
  'Q': '\u0252',
  'R': '\u0281',
  'S': '\u0283',
  'T': '\u03B8',
  'U': '\u028A',
  'V': '\u028C',
  'W': '\u028D',
  'X': '\u03C7',
  'Y': '\u028F',
  'Z': '\u0292',
  'a': 'a', 
  'b': 'b', 
  'c': 'c', 
  'd': 'd', 
  'e': 'e', 
  'f': 'f', 
  'g': 'g', 
  'h': 'h', 
  'i': 'i', 
  'j': 'j', 
  'k': 'k', 
  'l': 'l', 
  'm': 'm', 
  'n': 'n', 
  'o': 'o', 
  'p': 'p', 
  'q': 'q', 
  'r': 'r', 
  's': 's', 
  't': 't', 
  'u': 'u', 
  'v': 'v', 
  'w': 'w', 
  'x': 'x', 
  'y': 'y', 
  'z': 'z'
}

const maxLen = Object.keys(xsMap).reduce((maxLen, key) => {
  return key.length > maxLen ? key.length : maxLen
}, 1);


export function createSampaDecoder() {
  return function sampaDecoder(string = "") {
    string = typeof string === "string" ? string : string.toString();

    if (string === "") { 
      return "" 
    }

    let unicode = '';

    for (let i = 0; i < string.length; i++) {
      for (let j = maxLen; j > 0; j--) {
        if (string.length < i + j) {
          continue;
        }

        const substr = string.slice(i, i+j);
        console.log(`${i},${j} = ${substr}`);

        if (xsMap[substr]) {
          console.log(`match at ${i},${j} for ${substr} = ${xsMap[substr]}`);
          unicode += xsMap[substr];
          i = i + j - 1;
        }
      }
    }

    return unicode;
  }
}

// function (input) {
//   if (typeof input !== 'string') {
//     throw new TypeError('ipa.js expected string as input');
//   }

//   var tokenizer = require('./fn.tokenizer');

//   tokens = tokenizer(input);

//   tokens = tokens.map(function (e) {
//     switch (e) {
//       case 'b_<': return '\u0253';
//       case 'd_<': return '\u0257';
//       case 'd`': return '\u0256';
//       case 'g_<': return '\u0260';
//       case 'h\\': return '\u0266';
//       case 'j\\': return '\u029D';
//       case 'l`': return '\u026D';
//       case 'l\\': return '\u027A';
//       case 'n`': return '\u0273';
//       case 'p\\' : return '\u0278';
//       case 'r`': return '\u027D';
//       case 'r\\': return '\u0279';
//       case 'r\\`': return '\u027B';
//       case 's`': return '\u0282';
//       case 's\\': return '\u0255';
//       case 't`': return '\u0288';
//       case 'v\\': return '\u028B';
//       case 'x\\': return '\u0267';
//       case 'z`': return '\u0290';
//       case 'z\\': return '\u0291';
//       case 'A': return '\u0251';
//       case 'B': return '\u03B2';
//       case 'B\\': return '\u0299';
//       case 'G': return '\u0263';
//       case 'G\\_<': return '\u029B';
//       case 'G\\': return '\u0262';
//       case 'H\\': return '\u029C';
//       case 'I\\': return '\u1D7B';
//       case 'J\\_<': return '\u0284';
//       case 'J\\': return '\u025F';
//       case 'K\\': return '\u026E';
//       case 'L\\': return '\u029F';
//       case 'M\\': return '\u0270';
//       case 'N\\': return '\u0274';
//       case 'O\\': return '\u0298';
//       case 'R\\': return '\u0280';
//       case 'U\\': return '\u1D7F';
//       case 'X\\': return '\u0127';
//       case 'C': return '\u00E7';
//       case 'D': return '\u00F0';
//       case 'E': return '\u025B';
//       case 'F': return '\u0271';
//       case 'H': return '\u0265';
//       case 'I': return '\u026A';
//       case 'J': return '\u0272';
//       case 'K': return '\u026C';
//       case 'L': return '\u028E';
//       case 'M': return '\u026F';
//       case 'N': return '\u014B';
//       case 'O': return '\u0254';
//       case 'P': return '\u028B';
//       case 'Q': return '\u0252';
//       case 'R': return '\u0281';
//       case 'S': return '\u0283';
//       case 'T': return '\u03B8';
//       case 'U': return '\u028A';
//       case 'V': return '\u028C';
//       case 'W': return '\u028D';
//       case 'X': return '\u03C7';
//       case 'Y': return '\u028F';
//       case 'Z': return '\u0292';
//       default: return e;
//     }
//   });

//   return tokens.join('');
// };