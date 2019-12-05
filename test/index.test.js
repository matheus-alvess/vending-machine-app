const index = require('../index');

test('checking available coins', () => {
  expect(index.calculateChange(6.5, [1, 20, 30, 40, 10, 6])).toStrictEqual([
    0,
    0,
    0,
    0,
    1,
    6
  ]);
});
