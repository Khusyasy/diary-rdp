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
   *  : Literal
   *  :
   */
  Program() {
    return {
      type: "Program",
      body: this.Literal(),
    };
  }

  /**
   * Literal
   *  : NumericLiteral
   *  : StringLiteral
   */
  Literal() {
    switch (this._lookahead.type) {
      case 'NUMBER':
        return this.NumericLiteral();
      case 'STRING':
        return this.StringLiteral();
    }
    throw new Error(`Literal: unexpected literal production`);
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
   * StringLiteral
   *  : STRING
   *  :
   */
  StringLiteral() {
    const token = this._eat('STRING');
    return {
      type: 'StringLiteral',
      value: token.value.slice(1, -1),
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
