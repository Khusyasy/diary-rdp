module.exports = test => {
  // NumericLiteral
  test(`1153`, {
    type: "Program",
    body: {
      type: 'NumericLiteral',
      value: 1153,
    },
  });

  // StringLiteral
  test(`"khusyasy"`, {
    type: "Program",
    body: {
      type: 'StringLiteral',
      value: 'khusyasy',
    },
  });
  test(`'khusyasy'`, {
    type: "Program",
    body: {
      type: 'StringLiteral',
      value: 'khusyasy',
    },
  });
};
