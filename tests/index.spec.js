import { expect, assert } from 'chai';
import { createIpaDecoder } from '../index.js'

describe(`createIpaDecoder()`, () => {
  it(`should be a function`, () => {
    assert.typeOf(createIpaDecoder, 'function');
  });

  it(`should return a function`, () => {
    const ipa = createIpaDecoder();

    assert.typeOf(ipa, 'function');
  });
})

describe(`returned decoder function`, () => {
  const ipa = createIpaDecoder();

  it(`should return a string`, () => {
    assert.typeOf(ipa(), 'string');
  });
  
  it('should return correct values for lowercase letters', function () {
    assert.equal(ipa('a'), 'a');
    assert.equal(ipa('b'), 'b');
    assert.equal(ipa('c'), 'c');
    assert.equal(ipa('d'), 'd');
    assert.equal(ipa('e'), 'e');
    assert.equal(ipa('f'), 'f');
    assert.equal(ipa('g'), 'g');
    assert.equal(ipa('h'), 'h');
    assert.equal(ipa('i'), 'i');
    assert.equal(ipa('j'), 'j');
    assert.equal(ipa('k'), 'k');
    assert.equal(ipa('l'), 'l');
    assert.equal(ipa('m'), 'm');
    assert.equal(ipa('n'), 'n');
    assert.equal(ipa('o'), 'o');
    assert.equal(ipa('p'), 'p');
    assert.equal(ipa('q'), 'q');
    assert.equal(ipa('r'), 'r');
    assert.equal(ipa('s'), 's');
    assert.equal(ipa('t'), 't');
    assert.equal(ipa('u'), 'u');
    assert.equal(ipa('v'), 'v');
    assert.equal(ipa('w'), 'w');
    assert.equal(ipa('x'), 'x');
    assert.equal(ipa('y'), 'y');
    assert.equal(ipa('z'), 'z');
  });
  
  it('should return correct values for uppercase letters', function () {
    assert.equal(ipa('A'), 'ɑ');
    assert.equal(ipa('B'), 'β');
    assert.equal(ipa('C'), 'ç');
    assert.equal(ipa('D'), 'ð');
    assert.equal(ipa('E'), 'ɛ');
    assert.equal(ipa('F'), 'ɱ');
    assert.equal(ipa('G'), 'ɣ');
    assert.equal(ipa('H'), 'ɥ');
    assert.equal(ipa('I'), 'ɪ');
    assert.equal(ipa('J'), 'ɲ');
    assert.equal(ipa('K'), 'ɬ');
    assert.equal(ipa('L'), 'ʎ');
    assert.equal(ipa('M'), 'ɯ');
    assert.equal(ipa('N'), 'ŋ');
    assert.equal(ipa('O'), 'ɔ');
    assert.equal(ipa('P'), 'ʋ');
    assert.equal(ipa('Q'), 'ɒ');
    assert.equal(ipa('R'), 'ʁ');
    assert.equal(ipa('S'), 'ʃ');
    assert.equal(ipa('T'), 'θ');
    assert.equal(ipa('U'), 'ʊ');
    assert.equal(ipa('V'), 'ʌ');
    assert.equal(ipa('W'), 'ʍ');
    assert.equal(ipa('X'), 'χ');
    assert.equal(ipa('Y'), 'ʏ');
    assert.equal(ipa('Z'), 'ʒ');
  });

  it('should return correct values for modified capital letters', function () {
    assert.equal(ipa('B\\'), 'ʙ');
    assert.equal(ipa('G\\'), 'ɢ');
    assert.equal(ipa('G\\_<'), 'ʛ');
    assert.equal(ipa('H\\'), 'ʜ');
    assert.equal(ipa('I\\'), 'ᵻ');
    assert.equal(ipa('J\\'), 'ɟ');
    assert.equal(ipa('J\\_<'), 'ʄ');
    assert.equal(ipa('K\\'), 'ɮ');
    assert.equal(ipa('L\\'), 'ʟ');
    assert.equal(ipa('M\\'), 'ɰ');
    assert.equal(ipa('N\\'), 'ɴ');
    assert.equal(ipa('O\\'), 'ʘ');
    assert.equal(ipa('R\\'), 'ʀ');
    assert.equal(ipa('U\\'), 'ᵿ');
    assert.equal(ipa('X\\'), 'ħ');
  });

  it('should return correct values for modified lowercase letters', function () {
    assert.equal(ipa('b_<'), 'ɓ')
    assert.equal(ipa('d`'), 'ɖ')
    assert.equal(ipa('d_<'), 'ɗ')
    assert.equal(ipa('g_<'), 'ɠ')
    assert.equal(ipa('h\\'), 'ɦ')
    assert.equal(ipa('j\\'), 'ʝ')
    assert.equal(ipa('l`'), 'ɭ')
    assert.equal(ipa('l\\'), 'ɺ')
    assert.equal(ipa('n`'), 'ɳ')
    assert.equal(ipa('p\\'), 'ɸ')
    assert.equal(ipa('r`'), 'ɽ')
    assert.equal(ipa('r\\'), 'ɹ')
    assert.equal(ipa('r\\`'), 'ɻ')
    assert.equal(ipa('s`'), 'ʂ')
    assert.equal(ipa('s\\'), 'ɕ')
    assert.equal(ipa('t`'), 'ʈ')
    assert.equal(ipa('v\\'), 'ʋ')
    assert.equal(ipa('x\\'), 'ɧ')
    assert.equal(ipa('z`'), 'ʐ')
    assert.equal(ipa('z\\'), 'ʑ')
  });

  it('should return correct values for numbers and symbols', () => {
    assert.equal(ipa('.'), '.');
    assert.equal(ipa('"'), 'ˈ');
    assert.equal(ipa('%'), 'ˌ');
    assert.equal(ipa('z\''), 'zʲ');
    assert.equal(ipa('z_j'), 'zʲ');
    assert.equal(ipa('a:'), 'aː');
    assert.equal(ipa('a:\\'), 'aˑ');
    assert.equal(ipa('t-S'), 'tʃ');
    assert.equal(ipa('tS'), 't͡ʃ');
    assert.equal(ipa('@'), 'ə');
    assert.equal(ipa('@\\'), 'ɘ');
    assert.equal(ipa('@`'), 'ɚ');
    assert.equal(ipa('{'), 'æ');
    assert.equal(ipa('}'), 'ʉ');
    assert.equal(ipa('1'), 'ɨ');
    assert.equal(ipa('2'), 'ø');
    assert.equal(ipa('3'), 'ɜ');
    assert.equal(ipa('3\\'), 'ɞ');
    assert.equal(ipa('4'), 'ɾ');
    assert.equal(ipa('5'), 'ɫ');
    assert.equal(ipa('6'), 'ɐ');
    assert.equal(ipa('7'), 'ɤ');
    assert.equal(ipa('8'), 'ɵ');
    assert.equal(ipa('9'), 'œ');
    assert.equal(ipa('&'), 'ɶ');
    assert.equal(ipa('?'), 'ʔ');
    assert.equal(ipa('?\\'), 'ʕ');
    assert.equal(ipa('<\\'), 'ʢ');
    assert.equal(ipa('>\\'), 'ʡ');
    assert.equal(ipa('^'), '↑');
    assert.equal(ipa('!'), '↓');
    assert.equal(ipa('!\\'), 'ǃ');
    assert.equal(ipa('|'), '|');
    assert.equal(ipa('|\\'), 'ǀ');
    assert.equal(ipa('||'), '‖');
    assert.equal(ipa('|\\|\\'), 'ǁ');
    assert.equal(ipa('=\\'), 'ǂ');
    assert.equal(ipa('t-\\s'), 't‿s');
  });

  it('should return correct values for modified numbers and symbols');
  it('should fall back to returning unknown characters as-is');
  it('should treat underscore as an IPA tiebar');
})
