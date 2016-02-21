var expect = require('chai').expect, isBase;

describe('isBase', function () {
  'use strict';

  before(function () {
    isBase = require('../fn.isBase');
  });

  it('should be a function', function () {
    expect(isBase).to.be.a('function');
  });

  it('should return a boolean', function () {
    expect(isBase('a')).to.be.a('boolean');
  });

  it('should be true for numbers 1--9, and letters', function () {
    /* jshint -W030 */
    expect(isBase('1')).to.be.true;
    expect(isBase('a')).to.be.true;
    expect(isBase('A')).to.be.true;
    expect(isBase('z')).to.be.true;
    expect(isBase('Z')).to.be.true;
  });

  it('should throw an error if the input is not a string', function () {
    expect(function () { return isBase('two'); }).to.throw(RangeError);
  });

  it('should throw an error if the input is more than one character', function () {
    expect(function () { return isBase('two'); }).to.throw(RangeError);
  });

});