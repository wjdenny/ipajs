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