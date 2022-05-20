/**
 * Tokenizer Spec.
 */
const Spec = [
  // NUMBER
  [/^\d+/, 'NUMBER'],

  // STRING
  [/^"([^"]*)"/, 'STRING'],
  [/^'([^']*)'/, 'STRING'],
]

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

    for (const [regex, tokenType] of Spec) {
      const tokenValue = this._match(regex, string);

      // this rule does not match, try next one.
      if (tokenValue === null) {
        continue;
      }

      return {
        type: tokenType,
        value: tokenValue,
      }
    }

    throw new SyntaxError(`Unexpected token: ${string[0]}`);
  }

  /**
   * Match the regex with string.
   */
  _match(regex, string) {
    const matched = regex.exec(string);
    if (matched === null) {
      return null;
    }
    this._cursor += matched[0].length;
    return matched[0];
  }
}

module.exports = {
  Tokenizer,
}
