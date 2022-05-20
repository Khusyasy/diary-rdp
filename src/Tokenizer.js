/**
 * Tokenizer class.
 * 
 * Lazily pulls token from the input string.
 */
class Tokenizer {
  /**
   * Initializes the string.
   */
  init(string) {
    this._string = string;
    this._cursor = 0;
  }

  /**
   * Whether there are more tokens in the input string.
   */
  hasMoreTokens() {
    return this._cursor < this._string.length;
  }

  /**
   * Whether we reached EOF.
   */
  isEOF() {
    return this._cursor === this._string.length;
  }

  /**
   * Obtain next token.
   */
  getNextToken() {
    if (!this.hasMoreTokens()) {
      return null;
    }

    const string = this._string.slice(this._cursor);

    // NUMBER
    if (!Number.isNaN(Number(string[0]))) {
      let number = '';
      while (!Number.isNaN(Number(string[this._cursor]))) {
        number += string[this._cursor++];
      }
      return {
        type: 'NUMBER',
        value: Number(number),
      };
    }

    // STRING
    if (string[0] === '"') {
      let s = '';
      do {
        s += string[this._cursor++];
      } while (string[this._cursor] !== '"' && !this.isEOF());
      s += string[this._cursor++];  // skip the last "
      return {
        type: 'STRING',
        value: s,
      };
    }
  }
}

module.exports = {
  Tokenizer,
}
