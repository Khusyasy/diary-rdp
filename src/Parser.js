/**
 * Diary Parser implemented using Recursive Descent Parser (RDP)
 */

const { Tokenizer } = require('./Tokenizer');

class Parser {
  /**
   * Initializes the Parser.
   */
  constructor() {
    this._string = '';
    this._tokenizer = new Tokenizer();
  }

  /**
   * parses a string into ast
   */
  parse(string) {
    this._string = string;
    this._tokenizer.init(string);

    // Prime the Tokenizer to get the first token.
    // Used for predictive parsing.
    this._lookahead = this._tokenizer.getNextToken();

    return this.Program();
  }

  /**
   * Main entry point
   * 
   * Program
   *  : NumericLiteral
   *  :
   */
  Program() {
    return {
      type: "Program",
      body: this.NumericLiteral(),
    };
  }

  /**
   * NumericLiteral
   *  : NUMBER
   *  :
   */
  NumericLiteral() {
    const token = this._eat('NUMBER');
    return {
      type: 'NumericLiteral',
      value: Number(token.value),
    };
  }

  /**
   * Expects the next token to be of the given type.
   */
  _eat(tokenType) {
    const token = this._lookahead;

    if (token == null) {
      throw new SyntaxError(`Unexpected end of input, expected ${tokenType}`);
    }

    if (token.type !== tokenType) {
      throw new SyntaxError(`Unexpected token: ${token.type}, expected ${tokenType}`);
    }

    // Advance the tokenizer to the next token.
    this._lookahead = this._tokenizer.getNextToken();

    return token;
  }
}

module.exports = {
  Parser,
};
