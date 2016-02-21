'use strict';
var expect = require('chai').expect, ipa;

describe('ipa.js', function () {
  before(function () {
    ipa = require('../index');
  });

  it('should be a function', function () {
    expect(ipa).to.be.a('function');
  });

  it('returns a string', function () {
    expect(ipa('tEstiN')).to.be.a('string');
  });

  it('returns a non-empty string', function () {
    expect(ipa('tEstiN').length).to.be.at.least(1);
  });

  it('should reject no input', function () {
    expect(function () { ipa(); }).to.throw(TypeError, /expected string/);
  });

  it('should reject an object as input', function () {
    expect(function () { ipa({}); }).to.throw(TypeError, /expected string/);
  });

  it('should reject null as input', function () {
    expect(function () { ipa(null); }).to.throw(TypeError, /expected string/);
  });

  it('should reject undefined as input', function () {
    expect(function () {
      ipa(undefined);
    }).to.throw(TypeError, /expected string/);
  });

  it('should reject a number input', function () {
    expect(function () { ipa(2016); }).to.throw(TypeError, /expected string/);
  });

  it('should transform lowercase letters accurately', function () {
    expect(ipa('abcdefghijklmnopqrstuvwxyz')).to.equal(
      "abcdefghijklmnopqrstuvwxyz"
    );
  });

  it('should transform capital letters accurately', function () {
    expect(ipa('A')).to.equal("ɑ");
    expect(ipa('B')).to.equal("β");
    expect(ipa('C')).to.equal("ç");
    expect(ipa('D')).to.equal("ð");
    expect(ipa('E')).to.equal("ɛ");
    expect(ipa('F')).to.equal("ɱ");
    expect(ipa('G')).to.equal("ɣ");
    expect(ipa('H')).to.equal("ɥ");
    expect(ipa('I')).to.equal("ɪ");
    expect(ipa('J')).to.equal("ɲ");
    expect(ipa('K')).to.equal("ɬ");
    expect(ipa('L')).to.equal("ʎ");
    expect(ipa('M')).to.equal("ɯ");
    expect(ipa('N')).to.equal("ŋ");
    expect(ipa('O')).to.equal("ɔ");
    expect(ipa('P')).to.equal("ʋ");
    expect(ipa('Q')).to.equal("ɒ");
    expect(ipa('R')).to.equal("ʁ");
    expect(ipa('S')).to.equal("ʃ");
    expect(ipa('T')).to.equal("θ");
    expect(ipa('U')).to.equal("ʊ");
    expect(ipa('V')).to.equal("ʌ");
    expect(ipa('W')).to.equal("ʍ");
    expect(ipa('X')).to.equal("χ");
    expect(ipa('Y')).to.equal("ʏ");
    expect(ipa('Z')).to.equal("ʒ");
  });

  it('should transform modified capital letters accurately', function () {
    expect(ipa('B\\')).to.equal("ʙ");
    expect(ipa('G\\')).to.equal("ɢ");
    expect(ipa('G\\_<')).to.equal("ʛ");
    expect(ipa('H\\')).to.equal("ʜ");
    expect(ipa('I\\')).to.equal("ᵻ");
    expect(ipa('J\\')).to.equal("ɟ");
    expect(ipa('J\\_<')).to.equal("ʄ");
    expect(ipa('K\\')).to.equal("ɮ");
    expect(ipa('L\\')).to.equal("ʟ");
    expect(ipa('M\\')).to.equal("ɰ");
    expect(ipa('N\\')).to.equal("ɴ");
    expect(ipa('O\\')).to.equal("ʘ");
    expect(ipa('R\\')).to.equal("ʀ");
    expect(ipa('U\\')).to.equal("ᵿ");
    expect(ipa('X\\')).to.equal("ħ");
  });

  it('should transform modified lowercase letters accurately', function () {
    expect(ipa("b_<")).to.equal("ɓ");
    expect(ipa("d`")).to.equal("ɖ");
    expect(ipa("d_<")).to.equal("ɗ");
    expect(ipa("g_<")).to.equal("ɠ");
    expect(ipa("h\\")).to.equal("ɦ");
    expect(ipa("j\\")).to.equal("ʝ");
    expect(ipa("l`")).to.equal("ɭ");
    expect(ipa("l\\")).to.equal("ɺ");
    expect(ipa("n`")).to.equal("ɳ");
    expect(ipa("p\\")).to.equal("ɸ");
    expect(ipa("r`")).to.equal("ɽ");
    expect(ipa("r\\")).to.equal("ɹ");
    expect(ipa("r\\`")).to.equal("ɻ");
    expect(ipa("s`")).to.equal("ʂ");
    expect(ipa("s\\")).to.equal("ɕ");
    expect(ipa("t`")).to.equal("ʈ");
    expect(ipa("v\\")).to.equal("ʋ");
    expect(ipa("x\\")).to.equal("ɧ");
    expect(ipa("z`")).to.equal("ʐ");
    expect(ipa("z\\")).to.equal("ʑ");
  });

  it('should transform numbers and symbols accurately');
  it('should transform modified numbers and symbols accurately');
  it('should throw exception on non-sensical modifier'); // G_>
  it('should treat underscore as an IPA tiebar if nothing else');
});