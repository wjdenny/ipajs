var expect = require('chai').expect, tokenizer;

describe('tokenizer', function () {
  'use strict';

  before(function () {
    tokenizer = require('../fn.tokenizer');
  });

  it('should be a function', function () {
    expect(tokenizer).to.be.a('function');
  });

  it('should return an array', function () {
    expect(tokenizer('a\\b`c_<d_>fg')).to.be.an('array');
  });

  it('should separate base characters and following modifiers into array elements', function () {
    expect(tokenizer('a\\b`c_<d_>f~g=h_a')).to.have.length.of(7);
  });

});