let assert = require('assert');

import { isValidTriangle, getTriangleType } from '../src/index.js';

describe('Triangle Taxonomist', function() {
  describe('isValidTriangle', function() {
    it('enforces 3 sides', function() {
      assert.equal(isValidTriangle(1, 2), false);
    });

    it('allows floats', function() {
      assert(isValidTriangle(1.5, 1.5, 1.5));
    });

    it('allows strings parseable as floats', function() {
      assert(isValidTriangle('1.5', '1.5', '1.5'));
    });

    it('ensures sides can create a triangle', function() {
      // Valid
      assert(isValidTriangle(2, 3, 4));

      // Not valid
      assert.equal(isValidTriangle(1, 1, 2), false);

      // Not valid
      assert.equal(isValidTriangle(.5, .5, 2), false);
    });

  });

  describe('getTriangleType', function() {
    it('determines 3 equal sides as EQUAILATERAL', function() {
      assert.equal(getTriangleType(3,3,3), 'EQUILATERAL');
    });

    it('determines 2 equal sides as ISOSCELES', function() {
      assert.equal(getTriangleType(2,3,3), 'ISOSCELES');
    });

    it('determines 0 equal sides as SCALENE', function() {
      assert.equal(getTriangleType(2,3,4), 'SCALENE');
    });
  });

});
