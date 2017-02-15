
/**
 * Validate that three values can form a triangle
 */

module.exports = {
  isValidTriangle: isValidTriangle,
  getTriangleType: getTriangleType
};

function isValidTriangle(a, b, c) {
  // convert arguments to floats
  a = parseFloat(a);
  b = parseFloat(b);
  c = parseFloat(c);

  // make sure parsed values are numbers
  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    return false;
  }

  return (a + b > c) && (b + c > a) && (c + a > b);
}

function getTriangleType(a, b, c) {
  if (!isValidTriangle(a, b, c)) {
    return 'not a triangle';
  }

  // check for equilateral
  if (a === b && b === c) {
    return 'equilateral';
  }
  // check for isosceles
  if (a === b || b === c || c === a) {
    return 'isosceles';
  }
  // check for scalene
  return 'scalene';
}