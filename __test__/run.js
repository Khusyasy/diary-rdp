/**
 * Main test runner
 */

const { Parser } = require('../src/Parser');

const parser = new Parser();

const program = `
  /**
   * document test comment
   */
  1153
`;

const ast = parser.parse(program);

console.log(JSON.stringify(ast, null, 2));
