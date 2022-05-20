module.exports = test => {
  // simple variable declaration
  test(`let x = 1153;`, {
    type: "Program",
    body: [
      {
        type: "VariableStatement",
        declarations: [
          {
            type: "VariableDeclaration",
            id: {
              type: "Identifier",
              name: "x",
            },
            init: {
              type: "NumericLiteral",
              value: 1153,
            },
          },
        ],
      },
    ],
  });

  // variable declaration without init
  test(`let x;`, {
    type: "Program",
    body: [
      {
        type: "VariableStatement",
        declarations: [
          {
            type: "VariableDeclaration",
            id: {
              type: "Identifier",
              name: "x",
            },
            init: null,
          },
        ],
      },
    ],
  });

  // multiple variable declaration without init
  test(`let x, y;`, {
    type: "Program",
    body: [
      {
        type: "VariableStatement",
        declarations: [
          {
            type: "VariableDeclaration",
            id: {
              type: "Identifier",
              name: "x",
            },
            init: null,
          },
          {
            type: "VariableDeclaration",
            id: {
              type: "Identifier",
              name: "y",
            },
            init: null,
          },
        ],
      },
    ],
  });

  // multiple variable declaration
  test(`let x, y = 1153;`, {
    type: "Program",
    body: [
      {
        type: "VariableStatement",
        declarations: [
          {
            type: "VariableDeclaration",
            id: {
              type: "Identifier",
              name: "x",
            },
            init: null,
          },
          {
            type: "VariableDeclaration",
            id: {
              type: "Identifier",
              name: "y",
            },
            init: {
              type: "NumericLiteral",
              value: 1153,
            },
          },
        ],
      },
    ],
  });
};
