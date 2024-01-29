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
    assert.equal(
      ipa('abcdefghijklmnopqrstuvwxyz'),
      'abcdefghijklmnopqrstuvwxyz'
    );
  });
  
  it('should return correct values for uppercase letters', function () {
    assert.equal(
      ipa('ABCDEFGHIJKLMNOPQRSTUVWXYZ'),
      'ɑβçðɛɱɣɥɪɲɬʎɯŋɔʋɒʁʃθʊʌʍχʏʒ'
    );
  });

  it('should return correct values for modified capital letters', function () {
    assert.equal(
      ipa('B\\G\\G\\_<H\\I\\J\\J\\_<K\\L\\M\\N\\O\\R\\U\\X\\'),
      'ʙɢʛʜᵻɟʄɮʟɰɴʘʀᵿħ'
    );
  });

  it('should return correct values for modified lowercase letters', function () {
    assert.equal(
      ipa('b_<d`d_<g_<h\\j\\l`l\\n`p\\r`r\\r\\`s`s\\t`v\\x\\z`z\\'),
      'ɓɖɗɠɦʝɭɺɳɸɽɹɻʂɕʈʋɧʐʑ'
    );
  });

  it('should return correct values for numbers and symbols');
  it('should return correct values for modified numbers and symbols');
  it('should throw exception on non-sensical modifier');
  it('should treat underscore as an IPA tiebar');
})