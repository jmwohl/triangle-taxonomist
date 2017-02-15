#! /usr/bin/env node

const tt = require('../src/index.js');
const program = require('commander');

program
  .arguments('<side_a_length> <side_b_length> <side_c_length>')
  .parse(process.argv);

// ensure valid triangle
const a = program.args[0];
const b = program.args[1];
const c = program.args[2];

// Make sure all three args are passed -- if not, warn user, print help
if (typeof a === 'undefined' || typeof b === 'undefined' || typeof c === 'undefined') {
  console.log('\nPlease specify a value for all three sides.');
  program.outputHelp();
  process.exit(1);
}

// Looks like we have a triagle -- print the type.
console.log(tt.getTriangleType(a, b, c));