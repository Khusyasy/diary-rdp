/**
 * Diary Parser implemented using Recursive Descent Parser (RDP)
 */

class Parser {
  /**
   * parses a string into ast
   */
  parse(string) {
    this._string = string;

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
    return this.NumericLiteral();
  }

  /**
   * NumericLiteral
   *  : NUMBER
   *  :
   */
  NumericLiteral() {
    return {
      type: 'NumericLiteral',
      value: Number(this._string),
    };
  }
}

module.exports = {
  Parser,
};
