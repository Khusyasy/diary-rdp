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
];

const parser = new Parser();

/**
 * For manual testing.
 */
function exec() {
  const program = `
    (2 + 2) * 4;
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
