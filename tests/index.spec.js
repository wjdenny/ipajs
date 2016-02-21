import { expect, assert } from 'chai';
import { createSampaDecoder } from '../index.js'

describe(`createSampaDecoder()`, () => {
  it(`should be a function`, () => {
    assert.typeOf(createSampaDecoder, 'function');
  });

  it(`should return a function`, () => {
    const ipa = createSampaDecoder();

    assert.typeOf(ipa, 'function');
  });
})

describe(`returned decoder function`, () => {
  const ipa = createSampaDecoder();

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

  it('should transform modified capital letters accurately', function () {
    assert.equal(
      ipa('B\\G\\G\\_<H\\I\\J\\J\\_<K\\L\\M\\N\\O\\R\\U\\X\\'),
      'ʙɢʛʜᵻɟʄɮʟɰɴʘʀᵿħ'
    );
  });

  it('should transform modified lowercase letters accurately', function () {
    assert.equal(
      ipa('b_<d`d_<g_<h\\j\\l`l\\n`p\\r`r\\r\\`s`s\\t`v\\x\\z`z\\'),
      'ɓɖɗɠɦʝɭɺɳɸɽɹɻʂɕʈʋɧʐʑ'
    );
  });

  it('should transform numbers and symbols accurately');
  it('should transform modified numbers and symbols accurately');
  it('should throw exception on non-sensical modifier');
  it('should treat underscore as an IPA tiebar');
})