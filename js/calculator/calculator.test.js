const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});

test('divide 66 / 3 to equal 22', () => {
  expect(calculator.divide(66, 3)).toBe(22);
});

test('divide -17 / 5 to equal -3.4', () => {
  expect(calculator.divide(-17, 5)).toBe(-3.4);
});

test('multiply 418 * -32 to equal -13376', () => {
  expect(calculator.multiply(418, -32)).toBe(-13376);
});

test('multiply 0.52 * 0.89 to equal 0.46', () => {
  expect(calculator.multiply(0.52, 0.89)).toBe(0.46);
});