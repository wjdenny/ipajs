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
  'z': 'z',
  '.': '.',
  '"': '\u02C8',
  '%': '\u02CC',
  '_j': '\u02B2',
  '\'': '\u02B2',
  ':': '\u02D0',
  ':\\': '\u02D1',
  'tS': 't\u0361\u0283',
  '@': '\u0259',
  '@\\': '\u0258',
  '@`': '\u025A',
  '{': '\u00E6',
  '}': '\u0289',
  '1': '\u0268',
  '2': '\u00F8',
  '3': '\u025C',
  '3\\': '\u025E',
  '4': '\u027E',
  '5': '\u026B',
  '6': '\u0250',
  '7': '\u0264',
  '8': '\u0275',
  '9': '\u0153',
  '&': '\u0276',
  '?': '\u0294',
  '?\\': '\u0295',
  '<\\': '\u02A2',
  '>\\': '\u02A1',
  '^': '\u2191',
  '!': '\u2193',
  '!\\': '\u01C3',
  '|': '|',
  '|\\': '\u01C0',
  '||': '‖',
  '|\\|\\': '\u01C1',
  '=\\': '\u01C2',
  '-\\': '\u203F',
  ' ': ' ',
  '\t': '\t'

}

const maxLen = Object.keys(xsMap).reduce((maxLen, key) => {
  return key.length > maxLen ? key.length : maxLen
}, 1);


export function createIpaDecoder() {
  return function ipaDecoder(string = "") {
    string = typeof string === "string" ? string : string.toString();

    if (string === "") { 
      return "" 
    }

    let unicode = '';

    for (let i = 0; i < string.length; i++) {
      for (let j = Math.min(string.length, maxLen); j > 0; j--) {

        // If `i + j` exceeds the string length, skip this pass.
        if (string.length < i + j) {
          continue;
        }

        const substr = string.slice(i, i+j);

        if (xsMap[substr]) {
          unicode += xsMap[substr];
          i = i + j - 1;
          break;
        }
      }
    }

    return unicode;
  }
}