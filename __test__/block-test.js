module.exports = test => {
  // block with statements
  test(
  `
    {
      1153;
      "khusyasy";
    }
  `
  ,
  {
    "type": "Program",
    "body": [
      {
        type: "BlockStatement",
        body: [
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
          },
        ],
      },
    ]
  }
  );

  // empty block
  test(
  `
    {
    }
  `
  ,
  {
    "type": "Program",
    "body": [
      {
        type: "BlockStatement",
        body: [],
      }
    ]
  }
  );

  // nested block
  test(
  `
    {
      1153;
      {
        "khusyasy";
      }
    }
  `
  ,
  {
    "type": "Program",
    "body": [
      {
        type: "BlockStatement",
        body: [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "NumericLiteral",
              "value": 1153
            }
          },
          {
            type: "BlockStatement",
            body: [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "StringLiteral",
                  "value": "khusyasy"
                }
              },
            ],
          },
        ],
      },
    ]
  }
  );
};
