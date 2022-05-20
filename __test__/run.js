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
];

const parser = new Parser();

/**
 * For manual testing.
 */
function exec() {
  const program = `
    /**
     * document test comment
     */
    1153;

    // another comment
    "khusyasy";

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
