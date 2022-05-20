/**
 * Main test runner
 */

const { Parser } = require('../src/Parser');
const assert = require('assert');

/**
 * List all of the tests
 */
const tests = [
  require('./literal-test'),
  require('./statement-list-test'),
  require('./block-test'),
  require('./empty-statement-test'),
  require('./math-test'),
  require('./assignment-test'),
];

const parser = new Parser();

/**
 * For manual testing.
 */
function exec() {
  const program = `
    x += y + 1153;
  `;
  
  const ast = parser.parse(program);
  
  console.log(JSON.stringify(ast, null, 2));
}

// Manual test
exec();

/**
 * Automatic testing function
 */
function test(program, expected) {
  const ast = parser.parse(program);
  assert.deepEqual(ast, expected);
}

// Run all of the tests
tests.forEach(testRun => testRun(test));
console.log('All tests passed!');
