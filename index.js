module.exports = function (input) {
  if (typeof input !== 'string') {
    throw new TypeError('ipa.js expected string as input');
  }

  var i = -1, base, mod, result = [];
  while (i++ < input.length) {
    if (input[i+1] === '\\') {
      base = input.substr(i,2);
      if (input[i+2] === '_') {
        mod = input.substr(i+2,2);
      }
    }

    else if (input[i+1] === '`') {
      base = input.substr(i,2);
    }

    else {
      base = input.substr(i,1);
      if (input[i+1] === '_') {
        mod = input.substr(i+1,2);
      }
    }

    switch (base) {
      case 'b':
        if (mod === "_<") { result.push('\u0253'); i=i+3; }
        else { result.push('b'); }
        break;
      case 'd':
        if (mod === "_<") { result.push('\u0257'); i=i+3; }
        else { result.push('d'); }
        break;
      case 'd`': result.push('\u0256'); i=i+2; break;
      case 'g':
        if (mod === "_<") { result.push('\u0261'); i=i+3; }
        else { result.push('g'); }
        break;
      case 'B\\': result.push('\u0299'); i++; break;
      case 'G\\':
          if (mod === "_<") { result.push('\u029B'); i=i+3; }
          else { result.push('\u0262'); i++; }
          break;
      case 'H\\': result.push('\u029C'); i++; break;
      case 'I\\': result.push('\u1D7B'); i++; break;
      case 'J\\':
        if (mod === "_<") { result.push('\u0284'); i=i+3; }
        else { result.push('\u025F'); i++; }
        break;
      case 'K\\': result.push('\u026E'); i++; break;
      case 'L\\': result.push('\u029F'); i++; break;
      case 'M\\': result.push('\u0270'); i++; break;
      case 'N\\': result.push('\u0274'); i++; break;
      case 'O\\': result.push('\u0298'); i++; break;
      case 'R\\': result.push('\u0280'); i++; break;
      case 'U\\': result.push('\u1D7F'); i++; break;
      case 'X\\': result.push('\u0127'); i++; break;
      case 'A': result.push('\u0251'); break;
      case 'B': result.push('\u03B2'); break;
      case 'C': result.push('\u00E7'); break;
      case 'D': result.push('\u00F0'); break;
      case 'E': result.push('\u025B'); break;
      case 'F': result.push('\u0271'); break;
      case 'G': result.push('\u0263'); break;
      case 'H': result.push('\u0265'); break;
      case 'I': result.push('\u026A'); break;
      case 'J': result.push('\u0272'); break;
      case 'K': result.push('\u026C'); break;
      case 'L': result.push('\u028E'); break;
      case 'M': result.push('\u026F'); break;
      case 'N': result.push('\u014B'); break;
      case 'O': result.push('\u0254'); break;
      case 'P': result.push('\u028B'); break;
      case 'Q': result.push('\u0252'); break;
      case 'R': result.push('\u0281'); break;
      case 'S': result.push('\u0283'); break;
      case 'T': result.push('\u03B8'); break;
      case 'U': result.push('\u028A'); break;
      case 'V': result.push('\u028C'); break;
      case 'W': result.push('\u028D'); break;
      case 'X': result.push('\u03C7'); break;
      case 'Y': result.push('\u028F'); break;
      case 'Z': result.push('\u0292'); break;
      default: result.push(input.substr(i,1)); break;
    }
  }
  return result.join('');
}