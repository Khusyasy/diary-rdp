module.exports = test => {
  // simple assignment
  test(`x = 1153;`, {
    type: "Program",
    body: [
      {
        type: "ExpressionStatement",
        expression: {
          type: 'AssignmentExpression',
          operator: '=',
          left: {
            type: 'Identifier',
            name: 'x',
          },
          right: {
            type: 'NumericLiteral',
            value: 1153,
          },
        },
      },
    ],
  });

  // chained simple assignment
  test(`x = y = 1153;`, {
    type: "Program",
    body: [
      {
        type: "ExpressionStatement",
        expression: {
          type: 'AssignmentExpression',
          operator: '=',
          left: {
            type: 'Identifier',
            name: 'x',
          },
          right: {
            type: 'AssignmentExpression',
            operator: '=',
            left: {
              type: 'Identifier',
              name: 'y',
            },
            right: {
              type: 'NumericLiteral',
              value: 1153,
            },
          },
        },
      },
    ],
  });
};
