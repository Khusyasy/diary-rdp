module.exports = test => {
  test(
  `
    1153;
    "khusyasy";
  `
  ,
  {
    "type": "Program",
    "body": [
      {
        "type": "ExpressionStatement",
        "expression": {
          "type": "NumericLiteral",
          "value": 1153
        }
      },
      {
        "type": "ExpressionStatement",
        "expression": {
          "type": "StringLiteral",
          "value": "khusyasy"
        }
      }
    ]
  }
  );
};
