let assert = require('assert');

const tt = require('../src/index.js');

describe('Triangle Taxonomist', function() {
  describe('tt.isValidTriangle', function() {
    it('enforces 3 sides', function() {
      assert.equal(tt.isValidTriangle(1, 2), false);
    });

    it('allows floats', function() {
      assert(tt.isValidTriangle(1.5, 1.5, 1.5));
    });

    it('allows strings parseable as floats', function() {
      assert(tt.isValidTriangle('1.5', '1.5', '1.5'));
    });

    it('ensures sides can create a triangle', function() {
      // Valid
      assert(tt.isValidTriangle(2, 3, 4));

      // Not valid
      assert.equal(tt.isValidTriangle(1, 1, 2), false);

      // Not valid
      assert.equal(tt.isValidTriangle(.5, .5, 2), false);
    });

  });

  describe('tt.getTriangleType', function() {
    it('prints \'not a triangle\' if the sides do not form a triangle', function() {
      assert.equal(tt.getTriangleType(1,1,2), 'not a triangle');
    });

    it('determines 3 equal sides as equilateral', function() {
      assert.equal(tt.getTriangleType(3,3,3), 'equilateral');
    });

    it('determines 2 equal sides as isosceles', function() {
      assert.equal(tt.getTriangleType(2,3,3), 'isosceles');
    });

    it('determines 0 equal sides as scalene', function() {
      assert.equal(tt.getTriangleType(2,3,4), 'scalene');
    });
  });

});
