module.exports = test => {
  // if else
  test(
  `
    if (x) {
      x = 0;
    } else {
      x = 1;
    }
  `
  ,
  {
    type: "Program",
    body: [
      {
        type: "IfStatement",
        test: {
          type: "Identifier",
          name: "x",
        },
        consequent: {
          type: "BlockStatement",
          body: [
            {
              type: "ExpressionStatement",
              expression: {
                type: "AssignmentExpression",
                operator: "=",
                left: {
                  type: "Identifier",
                  name: "x",
                },
                right: {
                  type: "NumericLiteral",
                  value: 0,
                },
              },
            },
          ],
        },
        alternate: {
          type: "BlockStatement",
          body: [
            {
              type: "ExpressionStatement",
              expression: {
                type: "AssignmentExpression",
                operator: "=",
                left: {
                  type: "Identifier",
                  name: "x",
                },
                right: {
                  type: "NumericLiteral",
                  value: 1,
                },
              },
            },
          ],
        },
      },
    ],
  }
  );

  // only if
  test(
  `
    if (x) {
      x = 0;
    }
  `
  ,
  {
    type: "Program",
    body: [
      {
        type: "IfStatement",
        test: {
          type: "Identifier",
          name: "x",
        },
        consequent: {
          type: "BlockStatement",
          body: [
            {
              type: "ExpressionStatement",
              expression: {
                type: "AssignmentExpression",
                operator: "=",
                left: {
                  type: "Identifier",
                  name: "x",
                },
                right: {
                  type: "NumericLiteral",
                  value: 0,
                },
              },
            },
          ],
        },
        alternate: null,
      },
    ],
  }
  );
};
